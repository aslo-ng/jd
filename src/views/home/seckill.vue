<template>
  <div class="seckill">
      <div class="sek-cen">
          <div class="sek-top">
              <div class="top-left">
                  <div class="left">京东秒杀</div>
                  <div class="cent">8<i></i></div>
                  <div class="right">
                      <van-count-down :time="time">
                        <template #default="timeData">
                            <span class="block">{{ timeData.hours }}</span>
                            <span class="colon">:</span>
                            <span class="block">{{ timeData.minutes }}</span>
                            <span class="colon">:</span>
                            <span class="block">{{ timeData.seconds }}</span>
                        </template>
                       </van-count-down>
                  </div>
              </div>
              <div class="top-right">
                  更多秒杀
              </div>
          </div>
          <div class="sek-img">
              <div>
                  <img src="https://img11.360buyimg.com/n7/s150x150_jfs/t1/120333/28/18757/88677/6170c9adE4d6070ad/dde91627832aeb41.jpg.dpg" alt="">
                  <p>￥300</p>
              </div>
              <div>
                  <img src="https://img11.360buyimg.com/n7/s150x150_jfs/t1/210355/11/9678/199260/619620baE86450bf6/73e0d7b2226c2e57.jpg.dpg" alt="">
                  <p>￥14.8</p>
              </div>
              <div>
                  <img src="https://img11.360buyimg.com/n7/s150x150_jfs/t1/184322/21/20186/130342/611df887E6fba85c3/dfd076599510a920.jpg.dpg" alt="">
                  <p>￥419</p>
              </div>
              <div>
                  <img src="https://img11.360buyimg.com/n7/s150x150_jfs/t1/117609/21/23169/104260/61936b9cEe0f888a2/f16598a6ba8a5e84.jpg.dpg" alt="">
                  <p>￥79</p>
              </div>
              <div>
                  <img src="https://img11.360buyimg.com/n7/s150x150_jfs/t1/205213/39/15367/53490/61970f52Ea55530ea/0de587f6eaf24ed9.jpg.dpg" alt="">
                  <p>￥1329</p>
              </div>
              <div>
                  <img src="https://img11.360buyimg.com/n7/s150x150_jfs/t1/215012/30/4919/197232/6195bc49Ee6fe737b/53cafa04613f572c.jpg.dpg" alt="">
                  <p>￥288</p>
              </div>
          </div>
      </div>
  </div>
</template>

<script type="text/javascript">
 export default{
     data(){
         return{
            time: 60 * 60 * 1000,
         }
     }
}
</script>

<style lang='scss'>
.seckill{
    width: 100%;
    height: 1.4492rem;
    padding: 0 .1rem .1rem;
    box-sizing: border-box;
    .sek-cen{
        width: 100%;
        height: 100%;
        border-radius: .1rem;
        background: #fff;
        .sek-top{
            width: 100%;
            height: .33984rem;
            line-height: .33984rem;
            background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABYwAAACQBAMAAABZrTKvAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAYUExURUdwTO0QEO0QEO0WFuoNDe0SEuwREewREYfJP0kAAAAIdFJOUwB9ZA+zIzZPcd7tbgAAA/BJREFUeNrt3TGP41QUBtDZtRbaTVig3SxIaS0sQz1oEO0uwaaFIk4LAeK/j+1kMg6FBynzZnPDOfVUnz5dX9vPmZubSW/uHtzeQEjjGt+Jg5ju1Bg1hgtbKuzGqDF8LH+NavyjOIjp51GNfxAHMb0Y1fi1OIjp1ajG78VBUF8fW/y9MIi/VdgpCCu7f+R2mwuDsF4eavxWFAT2YWjx54IgtF/e3N3+LQYAAAAAAACeyKvtYr58Lwci+242+FMSxPXJ7OBXWRBVtriv8TyXBkF9Mzv6ShpEH8Yd45iYXo5aPHsrD0L6bVzjL+RByJ1idsJWQUSfntb4d4kQ0IvTGr+WCAF9OK2xD3uJ6I/TGn8pEQJanNZ4LhHUGD6G2b9IBDUGSwWoMf9XHrhxBbz+4Ap4Gc0VcDSIK+CgJtfAsXmugI+YuIatYvTk2Bf+RPXTQ40/kwbhx7FhTFx+/Ipr4KcIuQZ+GBYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACC3PZEBwWZYVekz0FhedPJcEkRVFtVoVciB4izvGMbF3iqqq667HoiBwjYuqbtbrqtBjAu8UZdX0PV5ZKgg8jcu6bppm7SaP6DtF023HakzgpaLqh7FpTOhpnPWrcdOYxsS+xRuWim4au8cj8lIxTGNLBRe9NRSTB3+y4YFbXa0MYy532A7yqT+o6nX/+kONudwW7980F1Nbxf5PnNXkQuX7x2mTszY/HA2S1nlJO1uVbhiXdbNp28mnwt3uXJaFYXxeiXsiTJRuWW/a5bZtd+uJO7jske2ZR2+jD6ubENPEWzXtu17bTLzdyLse+xrvrBaXjqWkjLdut0ONl+1axAkvetWwulV6nKTG5WEY9+N4Yqu4MYrPuwPpLnrLtp285HFGvJvtocbLXWVxSzYt9he9/pIn5AQ1ru+HcTeObRXparw53IHsVmr89Mp6e6zxcr0SSOKLnktemho3oxo3apxsWhzvQMyKJBe7UY13KzdyqaeFWZGmxvt05/sau+ClnhZdyPJ48ny/3bx7oMZqHHkaz+8TVuPk00LISfI9jImFhNNP47lZ8Sy3eBJ5hqVCjZPdQs/dRNuN49fY64/0MS88cEs1JrL+ufzCy+jUNR69/hDy03M06HnGxT7mhZBTbW37g5rzxw5qcta0GB0NMo1TBFxvHo7Nq3GyaXE8qGlWpMi32yr+w0dMnL28Ne1269h8wruPTdsul9OflHL2OK6a3fARkyyS5Ntd75p2+MBfi5Nux4dPSh0iTLVW9D9e3PjPHqljrtY+8E84JwT8PJe9ovSzQUkHRRewWZy+x7kWpx3ImY0N4BIueCIAALgE/wB5Hy4N/5rMxgAAAABJRU5ErkJggg==);
            background-size: 100%;
            .top-left{
                width: 1.8073rem;
                height: 100%;
                float: left;
                font-size: .14rem;
                padding-left: .1rem;
                div{
                    float: left;
                }
                .right{
                    float: right;
                    margin-top: 0.07rem;
                }
                .cent{
                    padding-left: .05rem;
                    color: #f2270c;
                    i{
                        display: inline-block;
                        width: .2rem;
                        height: .17rem;
                        background-image: url(https://wq.360buyimg.com/wxsq_project/portal/m_jd_index/images/seckill-time-to_1de70c91.png);
                        background-size: 100%;
                    }
                }
            }
            .top-right{
                font-size: .12rem;
                float: right;
                padding-right: .1rem;
                color: #f2270c;
            }
        }
        .sek-img{
            overflow: hidden;
            margin: .06rem;
            div{
                float: left;
                width: .57rem;
                img{
                    width: .55rem;
                    height: .55rem;
                }
                p{
                    font-size: .13rem;
                    text-align: center;
                    color: #f2270c;
                }
            }
        }
    }
}
.colon {
    display: inline-block;
    margin: 0 .02rem;
    color: #ee0a24;
}
.block {
    display: inline-block;
    width: .12rem;
    height: .18rem;
    color: #fff;
    font-size: 12px;
    text-align: center;
    padding: 0 .01rem;
    background-color: #ee0a24;
}
</style>
