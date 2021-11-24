<template>
  <div class="home">
    <div class="home-top" ref="top">
      <div class="left">
        <div></div>
      </div>
      <div class="center">
        <div class="cen-left"></div>
        <div class="cen-cent">
        </div>
        <div class="cen-right">
          <input type="text" placeholder="小米盒子">
        </div>
      </div>
      <div class="right">登录</div>
    </div>
    <div class="banner">
      <div class="back"></div>
      <div class="ban">
          <div class="swiper">
          <div class="swiper-container" id="swiperOne">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(item, index) in img" :key="index">
                <img :src="item.pic" />
              </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination" style="color: #00f0ff"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="tab">
      <van-swipe autoplay="" :loop='false'>
        <van-swipe-item>
          <router-link :to='item.route' class="one" v-for="(item,index) in data" :key="index">
            <img :src="item.img" alt="">
            <p>{{item.center}}</p>
          </router-link>
        </van-swipe-item>
        <van-swipe-item>
          <div class="one" v-for="(item,index) in datas" :key="index">
            <img :src="item.pic" alt="">
            <p>{{item.center}}</p>
          </div>
        </van-swipe-item>
      </van-swipe>
    </div>
    <seckill/>
    <commodity/>
    <foot/>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/css/swiper.css";
import seckill from './home/seckill.vue';
import Commodity from './home/commodity.vue';
import Foot from './foot.vue';
export default {
  components: { seckill, Commodity, Foot },
  data(){
    return {
      img: [
        { pic:"https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/160698/4/25261/216093/6192e78fE3307a705/3f48602d2f86a733.jpg!cr_1125x449_0_166!q70.jpg.dpg" },
        { pic:"https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/196922/2/16761/169136/618b5f13Eb04e8241/cdcf5455d20035c3.jpg!cr_1053x420_4_0!q70.jpg.dpg"},
        { pic:"https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/197415/8/17402/84191/619352b3Ed5ffb9b8/7d8a405ec9c96533.jpg!cr_1053x420_4_0!q70.jpg.dpg" },
        {pic:'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/197725/6/17454/169590/6191d0c3E18519afc/892b331d62cc520f.jpg!cr_1053x420_4_0!q70.jpg.dpg'},
        {pic:'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/174877/12/15487/270883/60cd4516E61de5fe8/6c6824c68d6b4574.jpg!cr_1125x449_0_166!q70.jpg.dpg'},
        {pic:'https://imgcps.jd.com/ling4/10040354280618/5LyR6Zey5pe25YWJ/5paH5Lu25pS257qz5aW95biu5omL/p-5d91a49642dd5b7c7d528987/bd18e826/cr_1053x420_4_0/s/q70.jpg'},
        {pic:'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/172993/29/27076/146420/61931f64Ee6524f9b/9093609cb05f2419.jpg!cr_1053x420_4_0!q70.jpg.dpg'}
      ],
      data:[
        {
          img:'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/175540/24/19329/6842/60ec0b0aEf35f7384/ec560dbf9b82b90b.png!q70.jpg.dpg',
          center:'京东超市',
          route:'/supermarket'
        },{
          img:'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/178015/31/13828/6862/60ec0c04Ee2fd63ac/ccf74d805a059a44.png!q70.jpg.dpg',
          center:'数码电器',
          route:''
        },{
          img:'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/41867/2/15966/7116/60ec0e0dE9f50d596/758babcb4f911bf4.png!q70.jpg.dpg',
          center:'京东服饰',
          route:''
        },{
          img:'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/177902/16/13776/5658/60ec0e71E801087f2/a0d5a68bf1461e6d.png!q70.jpg.dpg',
          center:'京东生鲜',
          route:''
        },{
          img:'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/196472/7/12807/7127/60ec0ea3Efe11835b/37c65625d94cae75.png!q70.jpg.dpg',
          center:'京东到家',
          route:''
        },{
          img:'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/185733/21/13527/6648/60ec0f31E0fea3e0a/d86d463521140bb6.png!q70.jpg.dpg',
          center:'充值缴费',
          route:''
        },{
          img:'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/199143/10/8979/4223/614599f5E45cd5464/d15aa650a0ebe596.png!q70.jpg.dpg',
          center:'物流查询',
          route:''
        },{
          img:'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/186080/16/13681/8175/60ec0fcdE032af6cf/c5acd2f8454c40e1.png!q70.jpg.dpg',
          center:'领券',
          route:''
        },{
          img:'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/196711/35/12751/6996/60ec1000E21b5bab4/38077313cb9eac4b.png!q70.jpg.dpg',
          center:'领全贴',
          route:''
        },{
          img:'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/37709/6/15279/6118/60ec1046E4b5592c6/a7d6b66354efb141.png!q70.jpg.dpg',
          center:'PLUS会员',
          route:''
        }
      ],
      datas:[
        {
          pic:'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/191060/24/12861/6818/60ec11f2E67cf5ee6/c264378678b3cd96.png!q70.jpg.dpg',
          center:'京东国际'
        },
        {
          pic:'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/186882/8/12149/5894/60ec1250E9335241a/b22054613aa8ae75.png!q70.jpg.dpg',
          center:'京东拍卖'
        },
        {
          pic:'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/184220/15/16402/5719/6103a727Eee850902/0f552e380db9cd0e.png!q70.jpg.dpg',
          center:'看病购药'
        },
        {
          pic:'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/145692/9/1817/4493/5efbf652E61c4f3ec/722840c121d67fc6.png!q70.jpg.dpg',
          center:'玩3C'
        },
        {
          pic:'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/185282/10/13877/6658/60ec1404E0fc4061a/a7c213f76e37a8d6.png!q70.jpg.dpg',
          center:'沃尔玛'
        },
        {
          pic:'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/182378/35/13924/7463/60ec14c6E1f434a60/37fba58239f3547e.png!q70.jpg.dpg',
          center:'美妆馆'
        },
        {
          pic:'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/191377/35/12864/5624/60ec146cE304517a9/20acb632f59fbbbd.png!q70.jpg.dpg',
          center:'京东旅行'
        },
        {
          pic:'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/36551/10/16098/5792/60ec1589E755822d7/f958b896e706008a.png!q70.jpg.dpg',
          center:'拍拍二手'
        },
        {
          pic:'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/199384/36/8824/6465/61459a65E7b16893c/7becc937fbade5b3.png!q70.jpg.dpg',
          center:'9.9元拼'
        },
        {
          pic:'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/192665/22/12752/7912/60ec15cbE261a32bf/3ace51badf80e71b.png!q70.jpg.dpg',
          center:'全部'
        }
      ]
    };
  },
  mounted() {
    var mySwiper =new Swiper("#swiperOne", {
      loop: true, // 循环模式选项
      autoplay: true, //自动播放
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
    window.addEventListener('scroll',this.scroll.bind(this))
    console.log(mySwiper);
  },
  methods:{
    scroll(){
      console.log(1);
      var top = Math.floor(document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset)
      if(top>0){
        this.$refs.top.style.background='#e43130'
      }else{
        this.$refs.top.style.background='none'
      }
    }
  },
  metaInfo: {
    title: '我是home头', // set a title
    meta: [{             // set meta
      name: 'keyWords',
      content: '我是home关键字'
    },
    {
      name: 'description',
      content: '我是home描述'
    }],
    link: [{ // set link
      rel: 'asstes',
      href: 'https://assets-cdn.github.com/'
    }]
  },
  destroyed(){
    window.removeEventListener('scroll',this.scroll.bind(this))
  },
}
</script>
<style lang='scss' scoped>
.home{
  width: 100%;
  padding-bottom: .57rem;
  .home-top{
    width: 3.75rem;
    height: .44rem;
    background: none;
    display: flex;
    position: fixed;
    top: 0;
    left: 50%;
    z-index: 100;
    margin-left: -1.875rem;
    justify-content: space-between;
    align-items: center;
    .left{
      width: .4rem;
      height: .44rem;
      display: flex;
      align-items: center;
      justify-content: center;
      div{
        width: .2rem;
        height: .18rem;
        background-image: url(../assets/下载.png);
        background-size: 100%;
      }
    }
    .right{
      width: .4rem;
      height: .44rem;
      font-size: .14rem;
      text-align: left;
      color: #fff;
      line-height: .44rem;
    }
    .center{
      width: 2.73rem;
      height: .3rem;
      background: #f7f7f7;
      border-radius: 20px;
      position: relative;
      .cen-left{
        width: .2rem;
        height: .15rem;
        background-image: url(../assets/下载1.png);
        background-size: 100%;
        margin: .075rem .15rem .075rem .08rem;
        position: relative;
        float: left;
      }
      .cen-left::after{
        content: '';
        height: .16rem;
        border-right: 1px solid #ddd;
        position: absolute;
        right: -0.08rem;
        top: 0;
      }
      .cen-cent{
        width: 18px;
        height: 15px;
        float: left;
        margin: .075rem 0;
        background-image: url(../assets/jd-sprites.png);
        background-position: -80px 0;
        background-size: 200px;
      }
      .cen-right{
        float: left;
        width: 100%;
        height: 100%;
        padding-left: .6rem;
        box-sizing: border-box;
        position: absolute;
        input{
          background: none;
          border: none;
          padding: .075rem;
          outline: none;
          float: left;
        }
      }
    }
  }
  .banner{
    width: 100%;
    height: 1.87rem;
    position: relative;
    overflow: hidden;
    .back{
      width: 150%;
      height: 1.4498rem;
      background-image: linear-gradient(0deg,#f1503b,#c82519 50%);
      border-bottom-left-radius: 100%;
      border-bottom-right-radius: 100%;
      position: absolute;
      left: -25%;
      z-index: -1;
    }
    .ban{
      width: 3.5rem;
      margin: .44rem auto 0;
      overflow: hidden;
      height: 1.39984rem;
      border-radius: .05rem;
      overflow: hidden;
      .swiper {
        position: relative;
        width: 3.5rem;
        margin: 0 auto;
        height: 1.39984rem;
      }
      .swiper-slide img {
        width: 3.5rem;
        height: 1.39984rem;
      }
      #one {
        position: absolute;
        width: 0.32rem;
        height: 0.31rem;
        top: 55%;
        left: 0.2rem;
        z-index: 999;
        opacity: 0.7;
      }

      #two {
        position: absolute;
        width: 0.32rem;
        height: 0.31rem;
        right: 0.2rem;
        left: 3.2rem;
        opacity: 0.7;
        top: 55%;
        z-index: 999;
      }
      .swiper-pagination {
        --swiper-theme-color: #00f0ff;
      }
    }
  }
  .tab{
    width: 100%;
    height: 1.7698rem;
    .van-swipe{
      height: 100%;
      .one{
        width: .75rem;
        height: .7395rem;
        text-align: center;
        float: left;
        margin-top: .1rem;
        font-size: .12rem;
        img{
          width: .3998rem;
          height: .3998rem;
        }
      }
      .van-swipe__indicators{
        bottom: 0;
      }
    }
  }
}
</style>