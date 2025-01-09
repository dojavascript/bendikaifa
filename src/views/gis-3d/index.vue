<template>
  <!-- <div style="height: 800px;width: 100%">
    <sm3d-viewer
      scene-url="http://www.supermapol.com/realspace/services/3D-ZF_normal/rest/realspace"
    >
      <sm3d-measure></sm3d-measure>
  </sm3d-viewer>
  </div>-->
  <div style="height: 900px;width: 100%" id="Container"></div>
</template>

<script setup name="gis-3d">
function onload (SuperMap3D) {
  var viewer = new SuperMap3D.Viewer('Container');
  //   viewer.imageryLayers.addImageryProvider(new SuperMap3D.BingMapsImageryProvider({
  //     url: 'https://dev.virtualearth.net',
  //     mapStyle: SuperMap3D.BingMapsStyle.AERIAL,
  //     key: BING_MAP_KEY //由BingMap官网申请的密钥
  //   }))
}
onMounted(() => {
  onload(SuperMap3D)
})
</script>

<style lang="scss" scoped>
</style>