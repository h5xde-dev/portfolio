<template>
  <div class="fixed top-0 h-screen w-screen" style="z-index: -1; filter: blur(30px);">
    <div class="h-screen relative w-screen">
      <client-only placeholder="Loading...">
      <particles-bg
        :color="config.color"
        :config="config"
        :type="config.type"
        :bg="true"
      />
      </client-only>
    </div>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      config: {
        num: [1, 2],
        position: "absolute",
        color: [this.$tw.theme.colors.primary[400], this.$tw.theme.colors.primary[500], this.$tw.theme.colors.primary[700]],
        top: 0,
        zIndex: -1,
        type: "circle",
        life: [1.5, 2],
        rps: 0.1,
        radius: [1, 1],
        life: [1.5, 3],
        v: [1, 2],
        tha: [-30, 30],
        alpha: [0.6, 0],
        scale: [-0.3, 0.1],
        position: "all",
        cross: "dead",
        random: 2,
      },
    };
  },
};
</script>