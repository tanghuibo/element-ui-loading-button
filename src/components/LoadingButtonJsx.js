export default {
  data() {
    return {
      myLoading: false,
    };
  },
  render() {
    return (
      <el-button
        attrs={{
          ...this.$attrs,
          loading: this.myLoading || this.$attrs.loading,
        }}
        on={{
          ...this.$listeners,
          click: () => {
            this.$listeners.click & this.$listeners.click();
            if (this.$listeners.loadingClick) {
              this.myLoading = true;
              this.$emit("loadingClick", () => (this.myLoading = false));
            }
          },
        }}
        loading={this.myLoading || this.$attrs.loading}
      >
        {this.$slots.default}
      </el-button>
    );
  },
};
