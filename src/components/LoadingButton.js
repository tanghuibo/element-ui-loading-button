export default {
  data() {
    return {
      myLoading: false,
    };
  },
  render(h) {
    return h(
      "el-button",
      {
        attrs: {
          ...this.$attrs,
          loading: this.myLoading || this.$attrs.loading,
        },
        on: {
          ...this.$listeners,
          click: () => {
            this.$listeners.click & this.$listeners.click();
            if (this.$listeners.loadingClick) {
              this.myLoading = true;
              this.$emit("loadingClick", () => (this.myLoading = false));
            }
          },
        },
      },
      this.$slots.default
    );
  },
};
