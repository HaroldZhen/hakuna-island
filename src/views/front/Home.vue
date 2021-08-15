<template>
  <section class="hero" id="banner">
    <div class="hero__bg"></div>
    <div class="hero__content container d-flex flex-column">
      <div class="text-white my-auto">
        <div class="row justify-content-center">
          <div class="col-md-10 text-center text-white">
            <h2 class="hero__title font-pacifico">Hakuna Island</h2>
            <p class="hero__subtitle mb-0">島上一應俱全，你可以好好休息，也可以盡情玩樂</p>
            <router-link role="button" class="btn btn-primary text-white btn-lg mt-6" :to="{ name: 'front.products' }"
              >馬上出發</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="about">
    <div class="container text-center" data-aos="fade-down">
      <div class="py-9">
        <h2 class="mb-4 fs-4">辛苦一整年給自己和家人來點獎勵</h2>
        <div class="col">
          <p class="w-50 mx-auto text-secondary">
            想像一個僻靜的島嶼，擁有明亮的白色沙灘，一個充滿深藍色和海藍寶石的潟湖， 以及在微風中搖曳的高聳椰子樹。
            鋪砌的小路網絡蜿蜒穿過鬱鬱蔥蔥的土地，連接海濱住宿、美食餐廳、體育設施和令人振奮的水療中心。
            這就是哈庫島度假村，等待您體驗難忘的體驗。
          </p>
        </div>
      </div>
      <div class="row rooms">
        <div class="col-md-4" data-aos="flip-right" data-aos-easing="linear" data-aos-delay="0">
          <div class="card rooms__card border-0">
            <div class="rooms__img position-relative">
              <img src="@/assets/image/room1.jpeg" class="card-img-top rounded-0" alt="room1" />
              <div class="d-flex justify-content-center align-items-center rooms__box">
                <button class="btn btn-outline-white me-4">查看更多</button>
                <button class="btn btn-outline-white">放入購物車</button>
              </div>
            </div>
            <div class="card-body text-center">
              <h4 class="mb-2d5 fs-4d5">水上別墅</h4>
              <p class="card-text text-secondary">
                從您的私人水上保護區潛入潟湖，探索與自然海底世界的無盡邂逅。
                這個寬敞的避風港擁有奢華的細節、寬敞的空間和溫馨的氛圍。
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4" data-aos="flip-right" data-aos-easing="linear" data-aos-delay="500">
          <div class="card rooms__card border-0">
            <div class="rooms__img position-relative">
              <img src="@/assets/image/room3.jpeg" class="card-img-top rounded-0" alt="room3" />
              <div class="d-flex justify-content-center align-items-center rooms__box">
                <button class="btn btn-outline-white me-4">查看更多</button>
                <button class="btn btn-outline-white">放入購物車</button>
              </div>
            </div>
            <div class="card-body text-center">
              <h4 class="mb-2d5 fs-4d5">豪華泳池小屋</h4>
              <p class="card-text text-secondary">
                使用全新的豪華海灘泳池別墅提升您的夢想假期。
                這個令人驚嘆的環境採用現代航海設計和現代設施，融合了經典的內飾和優雅的色彩，營造出奢華的海島生活。
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4" data-aos="flip-right" data-aos-easing="linear" data-aos-delay="1000">
          <div class="card rooms__card border-0">
            <div class="rooms__img position-relative">
              <img src="@/assets/image/room2.jpeg" class="card-img-top rounded-0 img-fluid" alt="room2" />
              <div class="d-flex justify-content-center align-items-center rooms__box">
                <button class="btn btn-outline-white me-4">查看更多</button>
                <button class="btn btn-outline-white">放入購物車</button>
              </div>
            </div>
            <div class="card-body text-center">
              <h4 class="mb-2d5 fs-4d5">高級海灘洋房</h4>
              <div class="d-flex justify-content-between">
                <p class="card-text text-secondary mb-0">
                  一臥室海洋套房擁有極致的室內外生活空間，設有日光浴平台、私人游泳池、按摩浴缸。
                  令人驚嘆的開放式設計俯瞰潟湖，可以與您的親人一起享受難忘的時刻。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="booking-reason my-9">
    <div id="carouselReason" class="carousel carousel-dark slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active bg-light booking-reason__item py-5">
          <div class="row justify-content-center">
            <div class="col-10 col-md-8 col-lg-6">
              <div class="fs-4 mb-0 pb-3">選擇哈庫島度假村的理由一</div>
              <p class="lh-lg text-secondary text-start booking-reason__content">
                度假村擁有八種各式不同類型的沙灘別墅與水上別墅，致敬地夫馬爾當地渡假風格融合簡約型態設計，除此之外，島上延伸出的木製棧道，還連結水上海鮮餐廳＆酒吧與豪華頂級水上SPA。
                沙灘別墅極簡主義的設計風格，坐落在鬱鬱蔥蔥的熱帶花園中，隨時可踏上柔軟的白色長沙灘，眼前即是一望無際的綠松石瀉湖美景。
                水上別墅的異國情調，可直接在房內就可欣賞日落美景。
              </p>
            </div>
          </div>
        </div>
        <div class="carousel-item bg-primary text-white booking-reason__item py-5">
          <div class="row justify-content-center">
            <div class="col-10 col-md-8 col-lg-6">
              <div class="fs-4 mb-0 pb-3">選擇哈庫島度假村的理由二</div>
              <p class="lh-lg text-start booking-reason__content">
                渡假村附近珊瑚礁是Manta蝠魟和其他珍稀海洋生物的棲息地，
                可出海至附近小島上和這些當地的海底生物們近距離接觸，
                渡假村安排的潛水活動與水上中心可挑選各式的海洋行程， 此處清澈見底的海水使其成為浮潛和潛水體驗的理想場所
                ，絕對讓你對馬列環礁的豐富多元海洋世界感到驚艷不已。
              </p>
            </div>
          </div>
        </div>
        <div class="carousel-item bg-light booking-reason__item py-5">
          <div class="row justify-content-center">
            <div class="col-10 col-md-8 col-lg-6">
              <div class="fs-4 mb-0 pb-3">選擇哈庫島度假村的理由三</div>
              <p class="lh-lg text-secondary text-start booking-reason__content">
                在島的盡頭特別設置了僅限成人使用的娛樂區，18歲以上的賓客才可進入，靜謐的無邊際泳池，還有雪茄室與水煙室，獨享吞雲吐霧的快感，和一旁有撞球桌等配備的休閒娛樂室；也備有孩童專屬的
                MATATA俱樂部，設有少見的43英尺海盜船及專屬服務員帶領的教育遊戲活動，絕對可以讓孩子們沉浸上好幾小時，也備有兒童睡眠區供使用。
              </p>
            </div>
          </div>
        </div>
        <div class="carousel-item bg-primary text-white booking-reason__item py-5">
          <div class="row justify-content-center">
            <div class="col-10 col-md-8 col-lg-6">
              <div class="fs-4 mb-0 pb-3">選擇哈庫島度假村的理由四</div>
              <p class="lh-lg text-start booking-reason__content">
                哈庫島提供豐富設施及活動，除了滑水道、SPA、瑜珈、孩童俱樂部、獨家品牌商店等等，步行通過500公尺的人行空橋，
                便能抵達The Marina娛樂島，體驗更多新奇有趣的休閒活動。
              </p>
            </div>
          </div>
        </div>
      </div>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselReason" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </section>
  <div class="container py-9">
    <div class="row g-0 mb-3 mb-md-0 overflow-hidden">
      <div class="col-md-6" data-aos="fade-right" data-aos-easing="linear">
        <img src="@/assets/image/food2.jpeg" alt="food2" class="img-fluid" />
      </div>
      <div class="col-md-6 m-auto text-center px-6" data-aos="fade-left" data-aos-easing="linear">
        <h3 class="mb-3 fs-4">海鮮餐廳</h3>
        <p class="text-secondary lh-lg">
          品嚐最新鮮的哈庫島海鮮 位於珊瑚礁邊緣的海鮮餐廳，您可以在這裡欣賞印度洋上令人嘆為觀止的日出。
          它提供獨特的用餐體驗和輕鬆的氛圍，並供應包括哈庫島特有種龍蝦在內的各種海鮮。
        </p>
      </div>
    </div>
    <div class="row g-0 flex-row-reverse justify-content-between mb-3 mb-md-0 overflow-hidden">
      <div class="col-md-6" data-aos="fade-left" data-aos-easing="linear">
        <img src="@/assets/image/food1.jpeg" alt="" class="img-fluid" />
      </div>
      <div class="col-md-6 m-auto text-center px-6" data-aos="fade-right" data-aos-easing="linear">
        <h3 class="mb-3 fs-4">阿特爾自助餐聽</h3>
        <p class="text-secondary lh-lg">
          美味佳餚，美景盡收眼底 了解為什麼哈庫島度假村和水療中心的主餐廳年復一年被認為是哈庫島最好的餐廳之一。
          這家微風習習的餐廳供應豐盛的自助式早餐、午餐和晚餐，完美地體現了島嶼精神和迷人的太平洋景色。
          酒店每天供應全套歐陸式或英式早餐，午餐和晚餐則供應種類繁多的歐陸式、亞洲和各國美食。
        </p>
      </div>
    </div>
    <div class="row g-0 overflow-hidden">
      <div class="col-md-6" data-aos="fade-right" data-aos-easing="linear">
        <img src="@/assets/image/food3.jpeg" alt="" class="img-fluid" />
      </div>
      <div class="col-md-6 m-auto text-center px-6" data-aos="fade-left" data-aos-easing="linear">
        <h3 class="mb-3 fs-4">客房服務</h3>
        <p class="text-secondary lh-lg">
          當您不想離開舒適的房間，而不必擔心吃飯或喝水的時間時。
          無論是早餐、午餐還是晚餐，別墅內用餐都將我們餐廳的高水平服務和烹飪體驗帶到您房間的私密空間。
          如果您有任何飲食要求或過敏，請告知我們的一名團隊成員。
        </p>
      </div>
    </div>
  </div>
  <div class="bg-light coupon py-11">
    <div class="col-4 mx-auto d-flex flex-column justify-content-between align-items-center">
      <h2 class="mb-6 text-white">今日優惠</h2>
      <button class="btn btn-outline-white btn-lg">找到更多</button>
    </div>
  </div>
  <section class="py-9 mb-9">
    <h2 class="text-center mb-8">精彩時刻</h2>
    <div class="container-fluid">
      <Gallery></Gallery>
    </div>
  </section>
</template>
<script>
import Gallery from '@/components/Gallery.vue';

export default {
  props: ['isNavbarDark'],
  components: {
    Gallery,
  },
  data() {
    return {};
  },
  created() {
    this.$emit('update:isNavbarDark', true);
    this.$bus.$emit('isLoading', { status: true });
    this.$bus.$emit('isLoading', { status: false, ms: 2000 });
  },
};
</script>
