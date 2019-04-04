<template>
  <div>
    <div class="contact">
        <div class="cont-top">
          <p class="contact-title">CONTACT US</p>
          <p class="contact-name">联系我们</p>
        </div>
            <ul class="cont-bottom">
              <li>
                <div class="service">
                  <span class="dot"></span>
                  <span class="serive-title">
                  全国统一客服热线
                  </span>
                  <span class="dot right-dot"></span>
                </div>
                <p class="serive-call">
                  400 - 9905 - 396
                </p>
              </li>
              <li>
                <div class="service">
                  <span class="dot"></span>
                  <span class="serive-title">
                  服务时间
                  </span>
                  <span class="dot right-dot"></span>
                </div>
                <p class="serive-call">
                  周一至周五 8:30-12:00 13:30-17:40
                </p>
              </li>
              <li>
                <div class="service">
                  <span class="dot"></span>
                  <span class="serive-title">
                  公司地址
                  </span>
                  <span class="dot right-dot"></span>
                </div>
                <p class="serive-call">
                  深圳市南山区沙河街道侨香路4080号侨城坊1号楼5-7层
                </p>
              </li>
            </ul>
      </div>
      <footer class="y-footer">
        <p>COPYRIGHT ©  2018 深圳汇洁集团股份有限公司 </p>
        <p class="copy">粤ICP备 10024939号 </p>
      </footer>
  </div>
</template>

<style lang="less">
  .contact{
    margin:0 32px;
    width:685px;
    height:527px;
    border:1px solid rgba(127,127,127,1);
    margin-bottom: 49px;
    .cont-top{
      margin-top:43px;
      margin-left:33px;
      margin-bottom:40px;
      .contact-title{
        height:22px;
        font-size:29px;
        font-family:Georgia;
        font-weight:400;
        color:rgba(89,87,87,1);
      }
      .contact-name{
        margin-top: 16px;
        height:28px;
        font-size:29px;
        font-family:SourceHanSansCN-Regular;
        font-weight:400;
        color:rgba(89,87,87,1);
      }
    }
    .cont-bottom{
      height:330px;
      font-size:25px;
      font-family:SourceHanSansCN-Medium;
      font-weight:500;
      color:rgba(90,50,40,1);
      margin-left:32px;
      margin-top:45px;
      li {
        margin-bottom:65px;
        .service{
        overflow: hidden;
        margin-bottom:22px;
        .dot{
          width:14px;
          height:14px;
          border:2px solid rgba(90,50,40,1);
          border-radius:50%;
          float: left;
          margin-top:8px;
        }
        .right-dot{
          float: left;
        }
        .serive-title{
          margin:0 13px;
          font-size:25px;
          font-family:SourceHanSansCN-Medium;
          font-weight:500;
          color:rgba(90,50,40,1);
          float: left;
        }
        .serive-call{
          height:19px;
          font-size:25px;
          font-family:SourceHanSansCN-Light;
          font-weight:300;
          color:rgba(89,87,87,1);
        }

      }
      .server-time{
          margin-top: 65px;
          margin-bottom:0;
      }
      }

    }
  }
  .y-footer{
    margin-bottom:117px;
    p{
      height:24px;
      font-size:25px;
      font-family:SourceHanSansCN-Regular;
      font-weight:400;
      color:rgba(132,132,132,1);
      text-align: center;
    }
    .copy{
      margin-top:17px;
    }
  }
</style>
