<!--
  https://www.toptal.com/developers/cssminifier
  min.css 제작방법
-->
<script>

  let init_x=0
  let init_y=500
  let angle=80    
  let r=300
  let last_x=init_x+r*Math.cos(radian(90-angle))
  let last_y=init_y-r*Math.sin(radian(90-angle))

  function radian(angle){
      return angle*Math.PI/180

  }
  let tween = gsap.fromTo(".category-card", {rotation:angle,y:init_y,x:init_x},{ duration: 2.5, x: last_x, y:last_y,paused: true, }); // 앞에서 초기 좌표 설정후 뒤에서 움직이도록 작성
  // rotation : 시계방향으로 각도만큼 회전

  let moving=0;
  function move_card(){
    console.log('!!!!!!!!!!!!')
    if(moving==0){
        moving=(moving+1)%2;
        return tween.play(); 
    }else{
        moving=(moving+1)%2;
        return tween.reverse(); 
    }
  }


</script>

<link rel="stylesheet" href="style.css">
<div class="content">
  <div class="container">

    <section class="main-text">
        <span class="title"><b>안녕하세요! 개발을 좋아하는 KWG07, 고원규 입니다!</b></span>
        <br>
        <span>
          <b>Hi! I'm Wongyu Koh known as KWG07</b>
        </span> 
    </section>

      <!--
          <button class="category-card" on:click="{move_card}">
        <div class="card" style="width: 18rem;">
          <img src="https://gongu.copyright.or.kr/gongu/wrt/cmmn/wrtFileImageView.do?wrtSn=9046601&filePath=L2Rpc2sxL25ld2RhdGEvMjAxNC8yMS9DTFM2L2FzYWRhbFBob3RvXzI0MTRfMjAxNDA0MTY=&thumbAt=Y&thumbSe=b_tbumb&wrtTy=10004" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </button>


      -->
    <section class="main-content">
        <span>
          <div id="kor">
          
            <p>
              저는 18세로 대한민국에 거주 중이며, 운호고등학교 학생입니다.
            </p>
            <p>
              저는 알고리즘, 게임, 웹, 인공지능 등 다양한 분야에서 활동하고 있습니다.
            </p>

          </div>
          <br>
          <div id="eng">
            <p>
              I'm 18 years old living in South Korea, I'm a student at Unho High School.
            </p>
            <p>
              I'm acting in various fields such as Algorithms, Game Programming, Web developing, and AI.
            </p>
          </div>
      
        </span>
    </section>  
    <div class="next-section" id="REWARD SECTION">
      <div class="section-name">
        <p> 
          🏆️ REWARD 🏆️
        </p>
      </div>
      <div class="Section" id="2021 koi">
        <section class="section-grid">
          <div class="section-title">
            <p>
              2021 KOI Finals Bronze Award 🥉
            </p>
          </div>
          <div class="text">
            <p>
              2021 koi 중등부 본선 동상 수상
            </p>
          </div>
          <img class="image-scaling"  src="https://i.ibb.co/VCcT6FY/background-blurred-effect.png" alt=""/>
        </section>
      </div>
      <div class="Section" id="2022 koi">
        <section class="section-grid">
          <div class="section-title">
            <p>
              2022 KOI Finals Silver Award 🥈
            </p>
          </div>
          <div class="text">
            <p>
              2022 koi 중등부 본선 은상 수상
            </p>
          </div>
          <img class="image-scaling"  src="https://i.ibb.co/VCcT6FY/background-blurred-effect.png" alt=""/>
        </section>
      </div>
      <div class="Section" id="2022 kcf">
        <section class="section-grid">
          <div class="section-title">
            <p>
              2022 KCF Hackathon 1st 🏆️
            </p>
          </div>
          <div class="text">
            <p>
              2022 한국 코드페어(Korea Code Fair) 중등부 1st
            </p>
          </div>
          <img class="image-scaling"  src="https://i.ibb.co/5hxJpp4/Kakao-Talk-20240312-234438634-02.jpg" alt=""/>
        </section>
      </div>
      <div class="Section" id="2023 coi">
        <section class="section-grid">
          <div class="section-title">
            <p>
              2022 COI 2nd 🥈
            </p>
          </div>
          <div class="text">
            <p>
              2023 충북 정보올림피아드 고등부 본선 2등
            </p>
          </div>
          <img class="image-scaling"  src="https://i.ibb.co/VCcT6FY/background-blurred-effect.png" alt=""/>
        </section>
      </div>
      <div class="Section" id="2023 꿈나무 축제">
        <section class="section-grid">
          <div class="section-title">
            <p>
              2023 Physical Computing 1st 🏆️
            </p>
          </div>
          <div class="text">
            <p>
              2023 충북 피지컬 컴퓨팅 1등
            </p>
          </div>
          <img class="image-scaling"  src="https://i.ibb.co/VCcT6FY/background-blurred-effect.png" alt=""/>
        </section>
      </div>

      <div class="Section" id="2023 미래채움">
        <section class="section-grid">
          <div class="section-title">
            <p>
              2023 KOREA Autonomous Driving Contest 1st 🏆️
            </p>
          </div>
          <div class="text">
            <p>
              2023 한국 SW 미래채움 자율주행 부분 1등
            </p>
          </div>
          <img class="image-scaling"  src="https://i.ibb.co/yBN1hWW/Kakao-Talk-20240312-234438634-01.jpg" alt=""/>
        </section>
      </div>
      <div class="Section" id="2023 kcf">
        <section class="section-grid">
          <div class="section-title">
            <p>
              2023 KCF Hackathon 1st 🏆️
            </p>
          </div>
          <div class="text">
            <p>
              2023 한국 코드페어(Korea Code Fair) 고등부 1st
            </p>
          </div>
          <img class="image-scaling"  src="https://i.ibb.co/PFShVV2/Kakao-Talk-20240312-234702863.jpg" alt=""/>
        </section>
      </div>
    </div>


    <div class="next-section" id="PROJECT SECTION">
      <div class="section-name">
        <p> 
          🖥 PROJECT 📲
        </p>
      </div>
      <div class="Section" id="tetris">
        <a href="https://joseph0528.tistory.com/116" style="text-decoration:none; color:black">
          <section class="section-grid">
            <div class="section-title">
              <p>
                Math Tetris
              </p>
            </div>
            <div class="text">
              <p>
                대칭 이동과 평행이동을 이용한 테트리스 제작
              </p>
            </div>
            <img class="image-scaling"  src="https://i.ibb.co/P1k33TR/tetris.png" alt=""/>
          </section>
        </a>
      </div>
      <div class="Section" id="paper-domain-generalization">
        <a href="https://joseph0528.tistory.com/117" style="text-decoration:none; color:black">
          <section class="section-grid">
            <div class="section-title">
              <p>
                Domain Generalization Image Classification
              </p>
            </div>
            <div class="text">
              <p>
                데이터 개수가 적은 상황에서 한국 상품 이미지 분류 성능 개선을 위한 딥러닝 기반의 도메인 일반화 연구
              </p>
            </div>
            <img class="image-scaling"  src="https://private-user-images.githubusercontent.com/68761453/256832219-8c795bda-0168-4026-b70d-d23d7d0dc53d.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTAyOTQwMjMsIm5iZiI6MTcxMDI5MzcyMywicGF0aCI6Ii82ODc2MTQ1My8yNTY4MzIyMTktOGM3OTViZGEtMDE2OC00MDI2LWI3MGQtZDIzZDdkMGRjNTNkLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAzMTMlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMzEzVDAxMzUyM1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTBkNWVkNGY4ZWMxNTkzNzY2MDYyYmYzMjlhNDYxZjVkNjI4YjhhOWYwNmRiNDQ5YzE5MjJkZWZiMjMwYTZlYWYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.xlTyQQNSjTcGToQtvx3q4wLJm9KOxYR5swP4dWgcJow" alt=""/>
          </section>
        </a>
      </div>
      <div class="Section" id="info fusion">
        <section class="section-grid">
          <div class="section-title">
            <p>
              Pac Man
            </p>
          </div>
          <div class="text">
            <p>
              팩맨 게임 제작
            </p>
          </div>
          <img class="image-scaling"  src="https://private-user-images.githubusercontent.com/68761453/258631781-58886a1e-2b61-4693-8d0d-8ed96ecfa2eb.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTAyOTQ0MjMsIm5iZiI6MTcxMDI5NDEyMywicGF0aCI6Ii82ODc2MTQ1My8yNTg2MzE3ODEtNTg4ODZhMWUtMmI2MS00NjkzLThkMGQtOGVkOTZlY2ZhMmViLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAzMTMlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMzEzVDAxNDIwM1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTIxODE2YzAzNGMxNTdjOTdkYjk5OGU0NDI3ODcxNjg0YmMwNmM0ZGI4ZTFmZTNiMjMwNGZiZTZmYTJlZTQ2YWQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.qSq5PmvpcnXmOPlDmxp85tbwPZCe7QHpbVesso75eyM" alt=""/>
        </section>
      </div>
      <div class="Section" id="2023 kcf qualifying round">
        <a href="https://joseph0528.tistory.com/115" style="text-decoration:none; color:black">
          <section class="section-grid">
            <div class="section-title">
              <p>
                Medicine Safe Dose Service
              </p>
            </div>
            <div class="text">
              <p>
                경구약 안전 복용 서비스
              </p>
            </div>
            <img class="image-scaling"  src="https://i.ibb.co/FbnLs8R/image.png" alt=""/>
          </section>
        </a>
      </div>
      <div class="Section" id="AI care robot">
        <section class="section-grid">
          <div class="section-title">
            <p>
              AI Care Robot
            </p>
          </div>
          <div class="text">
            <p>
              ai 돌봄 로봇
            </p>
          </div>
          <img class="image-scaling"  src=".\image\background_blurred_effect.png" alt="이미지"/>
        </section>
      </div>
      <div class="Section" id="2023 kcf finals">
        <section class="section-grid">
          <div class="section-title">
            <p>
              Prevent Accidents Service About The Weak in Digital
            </p>
          </div>
          <div class="text">
            <p>
              디지털 약자 사고 예방을 위한 서비스
            </p>
          </div>
          <img class="image-scaling"  src="https://i.ibb.co/HVHCxxJ/subway.png" alt=""/>
        </section>
      </div>
      <div class="Section" id="minecraft calculator">
        <section class="section-grid">
          <div class="section-title">
            <p>
              Minecraft Calculator by Logical Circuit
            </p>
          </div>
          <div class="text">
            <p>
              논리회로를 이용한 마인크래프트 계산기
            </p>
          </div>
          <img class="image-scaling"  src="https://i.ibb.co/VCcT6FY/background-blurred-effect.png" alt=""/>
        </section>
      </div>
      <div class="Section" id="ecosystem collapse">
        <section class="section-grid">
          <div class="section-title">
            <p>
              Ecosystem Diversity Change Simulation
            </p>
          </div>
          <div class="text">
            <p>
              개체의 다양성 변화에 따라 생태계 평형이 어떻게 깨지는가
            </p>
          </div>
          <img class="image-scaling"  src="https://blog.kakaocdn.net/dn/6riZj/btsCEIHXQS9/9cAIlSFiHKzdxgChtlwhoK/img.png" alt=""/>
        </section>
      </div>
      <div class="Section" id="Mine Sweeper">
        <section class="section-grid">
          <div class="section-title">
            <p>
              Mine Sweeper
            </p>
          </div>
          <div class="text">
            <p>
              지뢰 찾기
            </p>
          </div>
          <img class="image-scaling"  src="https://i.ibb.co/C1QCYJm/minesweeper.png" alt=""/>
        </section>
      </div>
      <div class="Section" id="Math Game">
        <section class="section-grid">
          <div class="section-title">
            <p>
              Whack The Mole by Math & Web Service
            </p>
          </div>
          <div class="text">
            <p>
              수학 두더지 게임 및 웹 서비스
            </p>
          </div>
          <img class="image-scaling"  src="https://private-user-images.githubusercontent.com/68761453/312109327-06fd17a2-b279-404f-95b8-68b67783c951.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTAzMDM5ODQsIm5iZiI6MTcxMDMwMzY4NCwicGF0aCI6Ii82ODc2MTQ1My8zMTIxMDkzMjctMDZmZDE3YTItYjI3OS00MDRmLTk1YjgtNjhiNjc3ODNjOTUxLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAzMTMlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMzEzVDA0MjEyNFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWVjOGNkZTIyZjQzZTRmNTNiNzg4ZDg3YTc4MGE2NzQ1Yzk2ZmEzOGUwNDY3YjIwNGFhNDFkY2M3ZWNjYzEzYWImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.6BSRjTMWwuiRNJn6jdJWRQUNZdTRX2deermChORUBgA" alt=""/>
        </section>
      </div>
    </div>
  </div>
</div>