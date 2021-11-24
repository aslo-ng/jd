<template>
  <div class="super">
      <van-nav-bar title="京东超市" left-text="" left-arrow @click-left="left">
        <template #right>
            <van-icon name="ellipsis" size="18" color="#333"/>
        </template>
       </van-nav-bar>
       <div class="banner">
           <div class="input">
               <div>
                   <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAqCAMAAAAUNPItAAAAflBMVEUAAACtra23t7etra28vLyurq6tra2tra2ysrK0tLStra2vr6+tra2tra2vr6+tra2tra2tra2tra2tra2urq6tra2urq6urq6tra2tra2tra2tra2urq6xsbGtra2urq6tra2tra2vr6+urq6tra2tra2srKywsLCtra2srKzSBJacAAAAKXRSTlMA9Qz5B0LqzxkT5TzHZyXe17idlYp6bWHvvrOsMSCIg35zWUo3pVAskT13IboAAAGwSURBVDjLlVXZtoMgDETc665137q3/v8P3nMJKALS03lLmByGMAS0hxVMfZiYjpvltY++IcidhUNbYR373S0iTpF1xMb5okIaqOmju6hh1krlvHAj2R3jI2sajHX/6YH/+zRGnclyhUj3TnTFvfPZglVEQtNDKlXIo9ilC/YufYGsI7cC97Sv/BF8EN/ESIEnFFy5VCHtKWtt/O1YcKoLUsOD3ec1UYHCQ6vMZD1Z41ZomQjcEMKbhSZRr3EiGKuk0YNEGTrGHcxNoxeJKg3fIgpSGtWE/0IaELcYNLgS/kPHhyvAvBliHT8jlJFvf6Djg+v83/QvFt+tUkPHYIBd/0MN/0YYHeuuQdUd4rn3Y8cE6Q06sLgWDC6iAH+Kz6s4mnqm+MDmheCmpPsJjCTM9cuBBxmovNYugDOXrCBlyDt4YB2xgA3mSXg1NtysVIDZsHX4+T2Az1QFo8OSRn8bPIRje0q3ES0XxLCqglnZbBrPnKTsgN7YCK0FA9pQGip6FiO0FVx3V/MxRbYLQ3ItqIVPqXQ5spPDb7AVJFi+oej8bNOwL0rhuuPezT30M/4Azz5p8/Ey58QAAAAASUVORK5CYII=" alt="">
                   <input type="text" placeholder="一站式囤生活好物">
               </div>
           </div>
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
      <van-swipe autoplay="" :loop='true'>
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
    <purchase/>
    <Recommend/>
  </div>
</template>

<script type="text/javascript">
import Swiper from "swiper";
import "swiper/css/swiper.css";
import purchase from './purchase.vue';
import Recommend from './recommend.vue';
 export default{
  components: { purchase, Recommend },
     data(){
         return{
             img: [
                { pic:"https://m.360buyimg.com/babel/jfs/t1/162182/9/24995/132177/6199d2d9E13e93acb/591ad7416c8c4055.png!q70.webp" },
                { pic:"https://m.360buyimg.com/babel/jfs/t1/209256/3/9444/199094/61923035E447ecf9a/17268348f3f45ce0.jpg!q70.webp"},
                { pic:"https://m.360buyimg.com/babel/jfs/t1/169649/12/24623/194914/61949e2eEfce5d99d/5ec4c56ab7c42d7b.jpg!q70.webp" },
                {pic:'https://m.360buyimg.com/babel/jfs/t1/212126/34/4945/144671/61970cedE8920c01c/7a7a70319eb10552.jpg!q70.webp'},
                {pic:'https://m.360buyimg.com/babel/jfs/t1/210766/26/9487/233251/61934c63Ebf3c89bd/1807e3b03cd90028.jpg!q70.webp'},
                {pic:'https://m.360buyimg.com/babel/jfs/t1/212895/27/4873/111052/6195f2a0E088b2259/7c4ca92758583eef.jpg!q70.webp'},
                {pic:'https://m.360buyimg.com/babel/jfs/t1/204650/39/15748/94775/619457e2E5e206fcb/9eae699fa4db694e.jpg!q70.webp'}
            ],
            data:[
            {
            img:'https://m.360buyimg.com/babel/jfs/t1/100497/39/6915/40960/5df83a38E63a4c981/8440898b6ffe9230.png!q70.webp',
            center:'时令生鲜',
            route:'/'
            },{
            img:'https://m.360buyimg.com/babel/jfs/t1/34206/13/3653/9542/5cc15c7eEed87d8e2/e318b1d0fb4ad060.png!q70.webp',
            center:'营养保健',
            route:''
            },{
            img:'https://m.360buyimg.com/babel/jfs/t1/35091/9/3631/12458/5cc15c77Ee6f6a7a0/dbdaa913106417ee.png!q70.webp',
            center:'汽车用品',
            route:''
            },{
            img:'https://m.360buyimg.com/babel/jfs/t1/34205/16/5920/14749/5cc15c6fEab13cec6/8f6364036301d64f.png!q70.webp',
            center:'宠物生活',
            route:''
            },{
            img:'https://m.360buyimg.com/babel/jfs/t1/32821/15/14543/10570/5cc15c68E334fb828/66377d4bd676e7eb.png!q70.webp',
            center:'小家电馆',
            route:''
            },{
            img:'https://m.360buyimg.com/babel/jfs/t1/87230/10/6964/23847/5df84bbaE7c26471f/51162c1c8e8b2bb5.png!q70.webp',
            center:'一小时达',
            route:''
            },{
            img:'https://m.360buyimg.com/babel/jfs/t1/34674/34/5893/5394/5cc15b88Eabf3078d/221095402d71717b.png!q70.webp',
            center:'山姆会员店',
            route:''
            },{
            img:'https://m.360buyimg.com/babel/jfs/t1/36542/16/5886/5110/5cc15b90E151c7d96/b8e7542a04d091ec.png!q70.webp',
            center:'沃尔玛',
            route:''
            },{
            img:'https://m.360buyimg.com/babel/jfs/t1/32783/1/15308/10861/5cc15ca4Ea45dc5de/2d3a9fd009c571b7.png!q70.webp',
            center:'童装童鞋',
            route:''
            },{
            img:'https://m.360buyimg.com/babel/jfs/t1/83056/4/12770/17940/5da7c0f6E1ba2f316/26d28d4e8d621b65.png!q70.webp',
            center:'超市签到',
            route:''
            }
            ],
            datas:[
                {
                pic:'https://m.360buyimg.com/babel/jfs/t1/34496/25/5851/11451/5cc15c9dE9713d73b/12179400e0ba1d8e.png!q70.webp',
                center:'中外乐器'
                },
                {
                pic:'https://m.360buyimg.com/babel/jfs/t1/38897/10/2589/13268/5cc15c94E9a1118e7/f526c8ea1b7d46b8.png!q70.webp',
                center:'车床座椅'
                },
                {
                pic:'https://m.360buyimg.com/babel/jfs/t1/34290/26/5886/13419/5cc15c85E736aaf71/2acdd8e1afedfbb0.png!q70.webp',
                center:'孕产用品'
                },
                {
                pic:'https://m.360buyimg.com/babel/jfs/t1/81826/4/13442/9799/5da99931E349ef513/9c50e1390e50b267.png!q70.webp',
                center:'PLUS专享'
                },
                {
                pic:'https://m.360buyimg.com/babel/jfs/t1/35929/28/5809/8981/5cc15b5bEa978b442/048b46c90adc7d97.png!q70.webp',
                center:'中外名酒'
                },
                {
                pic:'https://m.360buyimg.com/babel/jfs/t1/32801/27/15350/8587/5cc15b79E466aec9c/231b7e2cde4d2743.png!q70.webp',
                center:'牛奶水饮'
                },
                {
                pic:'https://m.360buyimg.com/babel/jfs/t1/33662/35/7334/9264/5cc15b6cE0c5d7397/8f74c4face871809.png!q70.webp',
                center:'休闲零食'
                },
                {
                pic:'https://m.360buyimg.com/babel/jfs/t1/30338/3/15390/11239/5cc15b64E37fe1f00/4923aa5eeddc6474.png!q70.webp',
                center:'纸品湿巾'
                },
                {
                pic:'https://m.360buyimg.com/babel/jfs/t1/42413/24/257/10436/5cc15ba1E4ab5bd62/bc800b2b78bf291e.png!q70.webp',
                center:'家庭清洁'
                },
                {
                pic:'https://m.360buyimg.com/babel/jfs/t1/40646/9/278/8268/5cc15c0bE9c52f2c5/ff602abd58528f49.png!q70.webp',
                center:'全部分类'
                }
            ]
         }
     },
     methods:{
         left(){
             this.$router.go(-1)
         }
     },
     mounted(){
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
            window.addEventListener('scroll',this.scrollHanle,true)
            console.log(mySwiper);
        }
}
</script>

<style lang='scss' scoped>
.banner{
    width: 100%;
    height: 1.93rem;
    margin-bottom: .07rem;
    position: relative;
    .input{
        width: 3.45rem;
        height: .3rem;
        position: absolute;
        top: .05rem;
        left: 50%;
        margin-left: -1.725rem;
        z-index: 100;
        border-radius: .2rem;
        overflow: hidden;
        background: #fff;
        div{
            width: 100%;
            height: 100%;
            position: relative;
            input{
                width: 100%;
                height: 100%;
                padding-left: .25rem;
                box-sizing: border-box;
                border: none;
                outline: none;
                font-size: .07rem;
            }
            img{
                width: .15rem;
                height: .15rem;
                position: absolute;
                top: 50%;
                margin-top: -0.075rem;
                left: 0.07rem;
            }
        }
    }
    .swiper {
        position: relative;
        width: 3.75rem;
        margin: 0 auto;
        height: 1.93rem;
      }
      .swiper-slide img {
        width: 3.75rem;
        height: 1.93rem;
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
.tab{
    width: 100%;
    height: 1.87rem;
    background: #fff;
    margin-bottom: .07rem;
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
</style>
