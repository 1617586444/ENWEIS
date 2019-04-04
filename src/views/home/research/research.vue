<template>
  <div>
    <Header />
    <div class="y-research">
      <dl class="reseact-wrapper">
        <dd class="resact-img">
          <img src="../../../assets/images/内衣研究院封面图.png" alt="">
        </dd>
        <dt class="resact-text">
          <div class="resact-text-top">
            <p>RESEARCH  FIELD</p>
            <h3>研究领域</h3>
          </div>
          <div class="resact-bar"></div>
          <div class="resact-text-bottom">
            研究院自成立以来，逐渐形成一支年龄结构合理、技术力量雄厚的研发梯队，不断进行技术改革与创新，将新技术、新设备、新工艺等研发成果应用于产品的设计与生产。
          </div>
        </dt>
      </dl>
      <div class="resea-list">
        <div class="res-title">
          内衣材料
        </div>
        <div class="res-cont-bt">
          <div class="res-bar"></div>
          <div class="res-content">
            <p class="text-top">
              配合产品的外观设计、工艺品质、贴肤舒适性等主、客观要求，关注天然环保、功能保健、人体美型等特性，从纤维成分、纺纱工艺、面料组织结构设计及染色方法、后处理等多方面进行科学研究，确保产品的健康舒适性、品质稳定性。
            </p>
            <p class="text-bottom">
              当环保成为消费者衡量产品品质的重要条件时，我司以低碳和环保作为产品研发的重要构成条件，对新型环保物料进行科学严谨测试，积极与材料开发商共同探讨，联合研发，逐步运用新品类的无纺纤维类材质取代海绵，并已取得良好的效果。此新型环保材料的应用技术在我司已经成熟且逐步对传统产品进行更替。
            </p>
          </div>
        </div>
      </div>
      <div class="res-image">
        <img src="../../../assets/images/图层 20.png" alt="">
      </div>
       <div class="resea-list">
        <div class="res-title">
          人体工学
        </div>
        <div class="res-cont-bt">
          <div class="res-bar"></div>
            <div class="res-content">
              <p class="text-top">
                内衣人体工学研究是研发的出发点和回归点，以人体测量、运动生理、 工程心理、生物力学、人体形态为研究方向，借助光学三角三维人体扫描，舒适性测试等国际先进的技术设备，建立内衣用人体数据库。
              </p>
              <p class="text-bottom">
                通过完备的数据分析和测试工作，研究人体机能静止、运动状态下的变化，确保产品设计满足消费者的生理健康，同时追踪并挖掘消费者由于生理变化而导致的心理需求，并研发相应的产品。
              </p>
            </div>
          </div>
        </div>
      <div class="res-image">
        <img src="../../../assets/images/图层 23.png" alt="">
      </div>
      <div class="resea-list">
        <div class="res-title">
          内衣设备
        </div>
        <div class="res-cont-bt">
          <div class="res-bar"></div>
            <div class="res-content">
              <p class="text-top">
                发明创造内衣专用的评价、检测设备，提高产品准确率，使内衣产品走向规范化，引导内衣设备不断改革创新
              </p>
              <p class="text-bottom">
                目前我司在罩杯测量评判等方面已取得国家发明专利；计算机设计、自动化生成模具已逐步取代传统手工模具，具有冷热交替定型、 精度高、寿命长、自动化等特点；先进产品检测及其数据化测量设备，多项已申请国家发明专利，部分已获得授权，或处于审批阶段； 通过对人体尺寸和体表曲率的分析，模拟穿着塑性文胸时的乳房形态和体型变化，研发实体内衣用人台，填补了内衣用人台的空白。
              </p>
            </div>
          </div>
        </div>
        <div class="resea-list">
        <div class="res-title">
          内衣舒适性评价
        </div>
        <div class="res-cont-bt">
          <div class="res-bar"></div>
            <div class="res-content">
              <p class="text-top">
                针对内衣类产品从理论和实践的角度，共同研究制定内衣各方位的试身及试穿评价方法，确保产品的舒适性。
              </p>
              <p class="text-bottom">
目前，我司已针对内衣的压力舒适性、热湿舒适性、结构舒适性等进行了测试与试验，逐步得出内衣拉力舒适范围、透气透湿舒适范围、符合人体工学的内衣结构等。目前使用的智能电脑测试系统中，就包含了程控机械装置、位移感应系统和应力感应系统，对测试结果进行分析，得到产品的物理特性，进而指导产品的舒适性研究。
              </p>
            </div>
          </div>
        </div>
    </div>
    <!-- 底部线条 -->
    <div class="code-bar">
    </div>
    <!-- 底部 -->
      <Concatc />
  </div>
</template>

<script>
import Header from '../../../components/header/header';
import Concatc from '../../../components/concatc/concatc';
export default {
  components: {
    Header,
    Concatc
  }
}
</script>

<style lang="less">
@import url('./research.less');
</style>
