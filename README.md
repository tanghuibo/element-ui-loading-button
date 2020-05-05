# element ui loading button

`loading-button` 基于element ui 的 `el-button` 组件，在原有功能上为其增加 `loadingClick` 事件。

## 使用方式

用户点击 `loading-button` 时，按钮自动进入 loading 状态，需要回调 loadingClick 第一个参数 `finishLoading` 方法才能取消按钮的 loading 状态。

## 实现方式

### render 函数实现

```js
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
  }
};
```

### jsx 实现

```jsx
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
```