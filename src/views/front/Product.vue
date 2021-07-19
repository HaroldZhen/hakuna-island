<template>
  <div class="position-relative d-flex align-items-center justify-content-center mt-9" style="min-height: 400px;">
    <div
      class="position-absolute"
      style="top:0; bottom: 0; left: 0; right: 0; background-image: url(https://images.unsplash.com/photo-1573906445622-3e98d4445256?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80); background-position: center center; opacity: 0.5;"
    ></div>
    <h2 class="fw-bold">Product</h2>
  </div>
  <div class="breadcrumb mt-3">
    <div class="container">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#">Home</a></li>
          <li class="breadcrumb-item">Product</li>
          <li class="breadcrumb-item active" aria-current="page">Detail</li>
        </ol>
      </nav>
    </div>
  </div>
  <div class="container mt-md-5 mt-3 mb-7">
    <div class="row align-items-center">
      <div class="col-md-7">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://images.unsplash.com/photo-1502743780242-f10d2ce370f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1916&q=80"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://images.unsplash.com/photo-1502743780242-f10d2ce370f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1916&q=80"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://images.unsplash.com/photo-1502743780242-f10d2ce370f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1916&q=80"
                class="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
      <div class="col-md-5">
        <h2 class="fw-bold h1 mb-1">Lorem ipsum</h2>
        <p class="mb-0 text-muted text-end"><del>NT$1,200</del></p>
        <p class="h4 fw-bold text-end">NT$1,080</p>
        <div class="row align-items-center">
          <div class="col-6">
            <div class="input-group my-3 bg-light rounded">
              <div class="input-group-prepend">
                <button class="btn btn-outline-dark border-0 py-2" type="button" id="button-addon1">
                  <i class="fas fa-minus"></i>
                </button>
              </div>
              <input
                type="text"
                class="form-control border-0 text-center my-auto shadow-none bg-light"
                placeholder=""
                aria-label="Example text with button addon"
                aria-describedby="button-addon1"
                value="1"
              />
              <div class="input-group-append">
                <button class="btn btn-outline-dark border-0 py-2" type="button" id="button-addon2">
                  <i class="fas fa-plus"></i>
                </button>
              </div>
            </div>
          </div>
          <div class="col-6">
            <a href="./checkout.html" class="text-nowrap btn btn-dark w-100 py-2">Lorem ipsum</a>
          </div>
        </div>
      </div>
    </div>
    <div class="row my-5">
      <div class="col-md-4">
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
        </p>
      </div>
      <div class="col-md-3">
        <p class="text-muted">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
      </div>
    </div>
    <h3 class="fw-bold">你可能會喜歡</h3>
    <div class="container mt-4 mb-5">
      <div class="row">
        <div class="col-4">
          <div class="card border-0 mb-4 position-relative position-relative">
            <img
              src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
              class="card-img-top rounded-0"
              alt="..."
            />
            <a href="#" class="text-dark"> </a>
            <div class="card-body p-0">
              <h4 class="mb-0 mt-3"><a href="#">Lorem ipsum</a></h4>
              <p class="card-text mb-0">
                NT$1,080 <span class="text-muted "><del>NT$1,200</del></span>
              </p>
              <p class="text-muted mt-3"></p>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="card border-0 mb-4 position-relative position-relative">
            <img
              src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
              class="card-img-top rounded-0"
              alt="..."
            />
            <a href="#" class="text-dark"> </a>
            <div class="card-body p-0">
              <h4 class="mb-0 mt-3"><a href="#">Lorem ipsum</a></h4>
              <p class="card-text mb-0">
                NT$1,080 <span class="text-muted "><del>NT$1,200</del></span>
              </p>
              <p class="text-muted mt-3"></p>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="card border-0 mb-4 position-relative position-relative">
            <img
              src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
              class="card-img-top rounded-0"
              alt="..."
            />
            <a href="#" class="text-dark"> </a>
            <div class="card-body p-0">
              <h4 class="mb-0 mt-3"><a href="#">Lorem ipsum</a></h4>
              <p class="card-text mb-0">
                NT$1,080 <span class="text-muted "><del>NT$1,200</del></span>
              </p>
              <p class="text-muted mt-3"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
