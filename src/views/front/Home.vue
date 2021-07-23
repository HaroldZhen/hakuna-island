<template>
  <FrontNavbar :isBgLight="false" />
  <header>
    <section class="hero">
      <div class="hero__bg"></div>
      <div class="hero__content container d-flex flex-column">
        <div class="text-white my-auto">
          <div class="row justify-content-center">
            <div class="col-md-6 text-center  text-white">
              <h2 class="hero__title">Hakuna Island</h2>
              <p class="hero__subtitle mb-0">島上一應俱全，你可以好好休息，也可以盡情玩樂</p>
              <button type="button" class="btn btn-primary text-white btn-lg mt-6">馬上出發</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </header>
  <main>
    <section class="about">
      <div class="container py-4 text-center pb-5">
        <h2 class="mb-5">辛苦一整年給自己和家人來點獎勵</h2>
        <div class="mb-8">
          <p class="col-6 mx-auto">
            想像一個僻靜的島嶼，擁有明亮的白色沙灘，一個充滿深藍色和海藍寶石的潟湖，以及在微風中搖曳的高聳椰子樹。
            鋪砌的小路網絡蜿蜒穿過鬱鬱蔥蔥的土地，連接海濱住宿、美食餐廳、體育設施和令人振奮的水療中心。
            這就是天堂島度假村和水療中心，等待您體驗難忘的體驗。
          </p>
        </div>
        <div class="row mt-5">
          <div class="col-md-4 mt-md-4">
            <div class="card border-0 mb-4">
              <img width="400" height="290" src="@/assets/image/room1.jpeg" class="card-img-top rounded-0" alt="..." />
              <div class="card-body text-center">
                <h4>水上別墅</h4>
                <div class="d-flex justify-content-between">
                  <p class="card-text text-muted mb-0">
                    從您的私人水上保護區潛入潟湖，探索與自然海底世界的無盡邂逅。
                    這個寬敞的避風港擁有奢華的細節、寬敞的空間和溫馨的氛圍。
                    在清澈的海水上方享受日光浴，在海風吹拂下享受戶外用餐，欣賞蔚藍的潟湖美景，盡情享受島嶼生活。無論您是尋求寧靜的人還是冒險者；天堂水上別墅提供終極航海體驗。
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 mt-md-4">
            <div class="card border-0 mb-4">
              <img width="400" height="290" src="@/assets/image/room3.jpeg" class="card-img-top rounded-0" alt="..." />
              <div class="card-body text-center">
                <h4>豪華泳池小屋</h4>
                <div class="d-flex justify-content-between">
                  <p class="card-text text-muted mb-0">
                    使用全新的豪華海灘泳池別墅提升您的夢想假期。
                    這個令人驚嘆的環境採用現代航海設計和現代設施，融合了經典的內飾和優雅的色彩，營造出奢華的海島生活。
                    在鬱鬱蔥蔥的椰子樹掩映下的私人泳池中放鬆身心並恢復活力，或者探索距離茅草別墅僅幾步之遙的水晶般清澈的海水。
                    看著太陽從您的私人日光浴平台上越過地平線，用獨特的藝術描繪天空。豪華海灘泳池別墅擁有 150
                    平方米的寬敞幽靜環境，提供充足的空間讓您沉浸在熱帶環境中。
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 mt-md-4">
            <div class="card border-0 mb-4">
              <img width="400" height="290" src="@/assets/image/room2.jpeg" class="card-img-top rounded-0" alt="..." />
              <div class="card-body text-center">
                <h4>高級海灘洋房</h4>
                <div class="d-flex justify-content-between">
                  <p class="card-text text-muted mb-0">
                    一臥室海洋套房擁有極致的室內外生活空間，設有日光浴平台、步入式衣櫥、私人游泳池、按摩浴缸和露天淋浴間。
                    令人驚嘆的 255 平方米開放式設計俯瞰潟湖，是一個寧靜的環境，可以與您的親人一起享受難忘的時刻。
                    從您的樓梯到潟湖，探索碧綠的海水和附近的珊瑚礁，或在您的豪華私人游泳池放鬆身心並恢復活力。
                    一臥室海洋套房是您遠離島嶼的私人水上度假勝地，採用傳統的馬爾代夫設計細節。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="booking-reason mt-7">
      <div id="carouselExampleControls" class="carousel carousel-dark slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active bg-light booking-reason__item">
            <div class="row justify-content-center py-7">
              <div class="col-md-6 text-center">
                <h3>選擇哈庫島度假村的理由一</h3>
                <p class="my-5">
                  酒店擁有八種各式不同類型的沙灘別墅與水上別墅，致敬馬爾地夫當地渡假風格融合簡約型態設計，除此之外，島上延伸出的木製棧道，還連結水上海鮮餐廳＆酒吧與豪華頂級水上SPA。
                  沙灘別墅極簡主義的設計風格，坐落在鬱鬱蔥蔥的熱帶花園中，隨時可踏上柔軟的白色長沙灘，眼前即是一望無際的綠松石瀉湖美景。
                  水上別墅的異國情調，可直接在房內就可欣賞日落美景，此外，Villa還擁有一間極具特色的水上私人15平方米大的泳池套房，設有一間寬敞的臥室和相連的客廳，一間豪華浴室以及可直接通往潟湖的甲板。
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item bg-primary text-white booking-reason__item">
            <div class="row justify-content-center py-7">
              <div class="col-md-6 text-center">
                <h3>選擇哈庫島度假村的理由二</h3>
                <p class="my-5">
                  酒店擁有八種各式不同類型的沙灘別墅與水上別墅，致敬馬爾地夫當地渡假風格融合簡約型態設計，除此之外，島上延伸出的木製棧道，還連結水上海鮮餐廳＆酒吧與豪華頂級水上SPA。
                  沙灘別墅極簡主義的設計風格，坐落在鬱鬱蔥蔥的熱帶花園中，隨時可踏上柔軟的白色長沙灘，眼前即是一望無際的綠松石瀉湖美景。
                  水上別墅的異國情調，可直接在房內就可欣賞日落美景，此外，Villa還擁有一間極具特色的水上私人15平方米大的泳池套房，設有一間寬敞的臥室和相連的客廳，一間豪華浴室以及可直接通往潟湖的甲板。
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item bg-light booking-reason__item">
            <div class="row justify-content-center py-7">
              <div class="col-md-6 text-center">
                <h3>選擇哈庫島度假村的理由三</h3>
                <p class="my-5">
                  酒店擁有八種各式不同類型的沙灘別墅與水上別墅，致敬馬爾地夫當地渡假風格融合簡約型態設計，除此之外，島上延伸出的木製棧道，還連結水上海鮮餐廳＆酒吧與豪華頂級水上SPA。
                  沙灘別墅極簡主義的設計風格，坐落在鬱鬱蔥蔥的熱帶花園中，隨時可踏上柔軟的白色長沙灘，眼前即是一望無際的綠松石瀉湖美景。
                  水上別墅的異國情調，可直接在房內就可欣賞日落美景，此外，Villa還擁有一間極具特色的水上私人15平方米大的泳池套房，設有一間寬敞的臥室和相連的客廳，一間豪華浴室以及可直接通往潟湖的甲板。
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item bg-primary text-white booking-reason__item">
            <div class="row justify-content-center py-7">
              <div class="col-md-6 text-center">
                <h3>選擇哈庫島度假村的理由四</h3>
                <p class="my-5">
                  酒店擁有八種各式不同類型的沙灘別墅與水上別墅，致敬馬爾地夫當地渡假風格融合簡約型態設計，除此之外，島上延伸出的木製棧道，還連結水上海鮮餐廳＆酒吧與豪華頂級水上SPA。
                  沙灘別墅極簡主義的設計風格，坐落在鬱鬱蔥蔥的熱帶花園中，隨時可踏上柔軟的白色長沙灘，眼前即是一望無際的綠松石瀉湖美景。
                  水上別墅的異國情調，可直接在房內就可欣賞日落美景，此外，Villa還擁有一間極具特色的水上私人15平方米大的泳池套房，設有一間寬敞的臥室和相連的客廳，一間豪華浴室以及可直接通往潟湖的甲板。
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </section>
    <div class="container my-7">
      <div class="row">
        <div class="col-md-6">
          <img width="636" height="424" src="@/assets/image/food2.jpeg" alt="" class="img-fluid" />
        </div>
        <div class="col-md-4 m-auto text-center">
          <h4 class="mt-4">海鮮餐廳</h4>
          <p class="text-muted">
            品嚐最新鮮的哈庫島海鮮 位於珊瑚礁邊緣的海鮮餐廳，您可以在這裡欣賞印度洋上令人嘆為觀止的日出。
            它提供獨特的用餐體驗和輕鬆的氛圍，並供應包括哈庫島特有種龍蝦在內的各種海鮮。
          </p>
        </div>
      </div>
      <div class="row flex-row-reverse justify-content-between mt-4">
        <div class="col-md-6">
          <img width="636" height="424" src="@/assets/image/food1.jpeg" alt="" class="img-fluid" />
        </div>
        <div class="col-md-4 m-auto text-center">
          <h4 class="mt-4">阿特爾自助餐聽</h4>
          <p class="text-muted">
            美味佳餚，美景盡收眼底 了解為什麼哈庫島度假村和水療中心的主餐廳年復一年被認為是哈庫島最好的餐廳之一。
            這家微風習習的餐廳供應豐盛的自助式早餐、午餐和晚餐，完美地體現了島嶼精神和迷人的太平洋景色。
            酒店每天供應全套歐陸式或英式早餐，午餐和晚餐則供應種類繁多的歐陸式、亞洲和馬爾代夫美食。
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <img width="636" height="424" src="@/assets/image/food3.jpeg" alt="" class="img-fluid" />
        </div>
        <div class="col-md-4 m-auto text-center">
          <h4 class="mt-4">客房服務</h4>
          <p class="text-muted">
            當您不想離開舒適的房間，而不必擔心吃飯或喝水的時間時。
            無論是早餐、午餐還是晚餐，別墅內用餐都將我們餐廳的高水平服務和烹飪體驗帶到您房間的私密空間。
            如果您有任何飲食要求或過敏，請告知我們的一名團隊成員。
          </p>
        </div>
      </div>
    </div>
    <div class="bg-light mt-7 py-4">
      <div class="col-4 mx-auto d-flex flex-column justify-content-between align-items-center">
        <h2 class="mb-6">今日優惠</h2>
        <button class="btn btn-outline-primary">找到更多</button>
      </div>
    </div>
    <section class="py-8">
      <h2 class="text-center mb-8">精彩時刻</h2>
      <div class="container-fluid">
        <Gallery class="mb-1" :galleryData="galleryOne"></Gallery>
        <Gallery class="mb-1" :galleryData="galleryTwo" :isReverseDirection="true"></Gallery>
        <Gallery class="mb-1" :galleryData="galleryOne"></Gallery>
      </div>
    </section>
  </main>
  <FrontFooter />
</template>
<script>
import FrontFooter from '@/components/FrontFooter.vue';
import FrontNavbar from '@/components/FrontNavbar.vue';
import Gallery from '@/components/Gallery.vue';
import shoppingData from '@/mixins/shoppingData';

export default {
  mixins: [shoppingData],
  components: {
    FrontFooter,
    FrontNavbar,
    Gallery,
  },
  data() {
    return {
      galleryOne: [
        {
          text: 'Hello',
          class: 'bg-primary',
          img: '',
        },
        {
          img:
            'https://images.unsplash.com/photo-1570023889725-4463e44ef6f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1351&q=80',
        },
        {
          img:
            'https://images.unsplash.com/photo-1527142879-95b61a0b8226?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80',
        },
        {
          img:
            'https://images.unsplash.com/photo-1551105379-6c50b7647c03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
        },
        {
          img:
            'https://images.unsplash.com/photo-1517154868524-c6b5fbd62a1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80',
        },
        {
          img:
            'https://images.unsplash.com/photo-1596436877314-0091e94a7ce7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80',
        },
        {
          img:
            'https://images.unsplash.com/photo-1596178060671-7a80dc8059ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        },
        {
          img:
            'https://images.unsplash.com/photo-1596178063511-997e2a0d6f13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80',
        },
        {
          img:
            'https://images.unsplash.com/photo-1596436876625-091f67351709?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
        },
        {
          img:
            'https://images.unsplash.com/photo-1596948209610-c566ee564ea2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80',
        },
        {
          img:
            'https://images.unsplash.com/photo-1588677240076-c921a6492dc0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80',
        },
        {
          img:
            'https://images.unsplash.com/photo-1583333803672-0403650c86b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1489&q=80',
        },
      ],
      galleryTwo: [
        {
          img:
            'https://images.unsplash.com/photo-1576551453314-a6235dd80f26?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHJlc29ydHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        },
        {
          img:
            'https://images.unsplash.com/photo-1580247331145-82d32dbbdcac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80',
        },
        {
          img:
            'https://images.unsplash.com/photo-1602693680203-a01c07f9dfae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=667&q=80',
        },
        {
          img:
            'https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=667&q=80',
        },
        {
          img:
            'https://images.unsplash.com/photo-1602002418655-57aef867418e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80',
        },
        {
          img:
            'https://images.unsplash.com/photo-1602002418206-1f0c0ebdaef4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=667&q=80',
        },
        {
          img:
            'https://images.unsplash.com/photo-1596178063511-997e2a0d6f13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80',
        },
        {
          img:
            'https://images.unsplash.com/photo-1596436876625-091f67351709?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
        },
        {
          img:
            'https://images.unsplash.com/photo-1605538032404-d7f061325b90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=667&q=80',
        },
        {
          img:
            'https://images.unsplash.com/photo-1605537964076-3cb0ea2ff329?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=717&q=80',
        },
        {
          img:
            'https://images.unsplash.com/photo-1601701119533-fde20cecbf4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80',
        },
      ],
    };
  },
};
</script>
<style lang="scss">
@import '@/assets/all';
</style>
