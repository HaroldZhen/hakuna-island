<template>
  <FrontBanner pageName="我們在這等你"></FrontBanner>
  <div class="breadcrumb mt-3">
    <div class="container">
      <FrontBreadcrumb>
        <li class="breadcrumb-item active" aria-current="page">關於我們</li>
      </FrontBreadcrumb>
    </div>
  </div>
  <div class="container pt-5 pb-9 min-vh-100">
    <h2 class="h3 me-auto mb-3">關於我們</h2>
    <div class="row mb-6">
      <div class="col-4">
        <div class="ratio ratio-4x3">
          <img src="@/assets/image/room1.jpeg" class="img-fluid" alt="room1" />
        </div>
      </div>
      <div class="col-6 me-auto">
        <p class="fs-5">
          哈庫島座落於太平洋哥吉拉棲息地的太平洋海底斷層上，擁有絕佳的生態環境，豐富的水下世界，讓您近距離就能觀賞，並且我們提供一條龍的全包服務，
          讓所有貴賓們吃喝玩樂不用愁！<br />24H專人客房服務、頂級奢華SPA療程、落日浪漫海釣、免費的水上活動以及短途出海遊等，
          讓您體驗無與倫比的豐富全包式假期，擁有3間不同風格的餐廳，提供豐富的美食、啜飲優質酒品、沉迷無限量的特調雞尾酒，讓每位前來的貴賓能夠體驗原始與現代結合的哈庫島難忘之旅。
        </p>
      </div>
    </div>
    <div class="row mb-7">
      <h4 class="text-center">資訊</h4>
      <div class="col-6 mx-auto">
        <p class="lh-lg">
          777-6666
        </p>
        <p class="lh-lg">哈庫島馬躂市天堂路101號</p>
        <p class="lh-lg">TEL：098-989-3333</p>
        <p class="lh-lg">FAX：098-989-2222</p>
        <p class="lh-lg">MAIL:service@hakuna-island.org</p>
      </div>
    </div>
    <div class="row mb-7">
      <h4 class="text-center">交通方式</h4>
      <div class="col-6 mx-auto">
        <p class="lh-lg mb-4">
          搭乘巴士：<br />
          【機場接駁巴士】<br />
          從哈庫島機場國內線乘降站出發，到哈庫市約60分鐘<br />
          到度假村步行約8分鐘<br />
        </p>
        <p>
          使用租車：<br />
          【一般道路】 <br />
          從哈庫島機場行駛國道出來北上約90分鐘。<br />
          【高速公路】<br />
          從距離哈庫島機場最近的哈庫市、國道交流道上高速公路，由國道交流道下來，行駛縣道88號線往南邊方向。約60分鐘
          <br /><br />可預約租車。如到哈庫島度假村酒店將可順利辦理租借、還車手續。 <br />
          哈庫島度假村酒店 8:00～11:00/17:00～19:00 ※工作人員服務時間外也可預約。
        </p>
      </div>
    </div>
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62098.828070443466!2d144.63677955506813!3d13.401379670008104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x671f76f73b0b1467%3A0x4d2c935ac4a9a255!2z6Zec5bO26YeM5aWn55qH5a6u5rih5YGH5p2R!5e0!3m2!1szh-TW!2stw!4v1629023585658!5m2!1szh-TW!2stw"
        class="about__map"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
  </div>
</template>
<script>
import FrontBanner from '@/components/front/Banner.vue';
import FrontBreadcrumb from '@/components/front/Breadcrumb.vue';

export default {
  data() {
    return {};
  },
  components: {
    FrontBanner,
    FrontBreadcrumb,
  },
};
</script>
