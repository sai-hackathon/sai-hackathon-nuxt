import Vue from 'vue';
import axios from 'axios';

export default Vue.mixin({
  components: {},
  mixins: [],
  props: {},
  data() {
    return {
      waitingResponse: false,
      baseUrl: process.env.API_URL
    };
  },
  computed: {
    token() {
      return this.$store.state.token || '';
    }
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {
    sleep(msec = 1000) {
      return new Promise((resolve) => setTimeout(resolve, msec));
    },
    async apiRequest(method, path, params = {}) {
      method = method.toLowerCase();
      const url = `${this.baseUrl}/${path}`;
      const headers = {};
      if (this.token) {
        params['api_key'] = this.token;
      }
      let config = { method, url, headers };

      if (Object.keys(params).length > 0) {
        if (method === 'get') {
          config.params = params;
        } else {
          config.data = params;
        }
      }
      this.$log.debug({ config });

      return await this.apiRequestWithRetry(method, config);
    },
    /**
     * Request 実行
     * NOTE:
     *   iOS 実機でなぜか Network Error になる、かつ連続で実行すると成功したりするため
     *   最大回数を決めてリトライする
     * @param {*} method
     * @param {*} config
     * @param {*} maxRetry
     * @returns
     */
    async apiRequestWithRetry(method, config, maxRetry = 5) {
      for (let i = 0; i < maxRetry; i++) {
        try {
          if (method !== 'get' && method !== 'options') {
            this.waitingResponse = true;
          }
          const res = await axios.request(config);
          if (method !== 'get' && method !== 'options') {
            this.waitingResponse = false;
          }
          this.$log.debug({ res });
          return res;
        } catch (error) {
          this.$log.error({ error });
          this.$log.error('error.response: ' + JSON.stringify(error.response));

          if (
            error?.message?.toLowerCase() === 'network error' &&
            i < maxRetry - 1
          ) {
            await this.sleep(250);
            continue;
          }

          if (method !== 'get' && method !== 'options') {
            this.waitingResponse = false;
          }
          if (error.response?.data?.message) {
            await this.alert(error.response.data.message, 'API Error');
          } else if (error.message) {
            await this.alert(error.message, 'API Error');
          }
          throw error;
        }
      }
    },
    async apiGet(path, params = {}, useCache = false) {
      return await this.apiRequest('get', path, params, useCache);
    },
    async apiPost(path, params = {}) {
      return await this.apiRequest('post', path, params);
    },
    async apiPut(path, params = {}) {
      return await this.apiRequest('put', path, params);
    },
    async apiPatch(path, params = {}) {
      return await this.apiRequest('patch', path, params);
    },
    async apiDelete(path, params = {}) {
      return await this.apiRequest('delete', path, params);
    }
  }
});
