<template>
  <div class="home">
    <div class="latestPost">
      <div class="latestPost-title">
        <i class="fas fa-pencil-alt"></i>
        <h3>Latest Post</h3>
      </div>
      <div class="latestPost-content">
        <div class="latestPost-content__column">
          <div class="latestPost-content__column-pic">
            <img src='../assets/pic-algorithm.png'/>
          </div>
          <div class="latestPost-content__column-title">Title</div>
          <div class="latestPost-content__column-subtitle">SubTitle</div>
          <div class="latestPost-content__column-date">2021-11-23</div>
        </div>
        <div class="latestPost-content__column">
          <div class="latestPost-content__column-pic">
            <img src='../assets/pic-react.jpeg'/>
          </div>
          <div class="latestPost-content__column-title">Title</div>
          <div class="latestPost-content__column-subtitle">SubTitle</div>
          <div class="latestPost-content__column-date">2021-11-23</div>
        </div>
        <div class="latestPost-content__column">
          <div class="latestPost-content__column-pic">
            <img src='../assets/pic-vue.jpeg'/>
          </div>
          <div class="latestPost-content__column-title">Title</div>
          <div class="latestPost-content__column-subtitle">SubTitle</div>
          <div class="latestPost-content__column-date">2021-11-23</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    // msg: String
  }
}
</script>


<style scoped>
.home {

}

.latestPost {
  box-sizing: border-box;
  width: var(--width);
  margin-bottom: 80px;
}

.latestPost-title {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
}

.latestPost-title i {
  margin-right: 10px;
  /* color: var(--green); */
}

.latestPost-content {
  box-sizing: border-box;
}

.latestPost-content__column {
  box-sizing: border-box;
  display: inline-block;
  margin: 0 20px;
  width: 280px;
  transition: all 0.3s ease-in-out;
}

.latestPost-content__column:hover {
  box-shadow: 0 5px 15px rgba(145, 92, 182, .4);
}

.latestPost-content__column-pic {
  box-sizing: border-box;
  width: 100%;
  height: 250px;
  margin-bottom: 10px;
}

.latestPost-content__column-pic img {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
  background-position: center;
}

.latestPost-content__column-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 5px;

  box-sizing: border-box;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border: dotted skyblue;
}

.latestPost-content__column-subtitle {
  font-size: 1.1rem;
  opacity: 0.8;
  margin-bottom: 5px;
  font-weight: 500;

  box-sizing: border-box;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border: dotted skyblue;
}

.latestPost-content__column-date {
  opacity: 0.6;
  font-weight: 500;
  height: 40px;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  overflow: hidden;
  border: dotted skyblue;
}
</style>
