# React 스켈레톤 UI 연습

<h1>23/12/05</h1>
<p>프로젝트 진행시간 : 4시간</p>

<h2>📌 프로젝트 진행이유</h2>

- 현재 진행하고 있는 프로젝트 <a href="https://github.com/bp4sp4/WeddingVideoPage">웨딩러리</a> 에서 가지고 있는 json 형태의 스튜디오,드레스,메이크업 좋은 데이터가 있기 떄문에 하게되었다.
- 리액트로 json 파일 뿌려주는건 굉장히 자바스크립트보다 편하다 생각이 들어 리액트 감도 잃지않을려고 하게 되었다.
- 프로젝트 진행이유는 리액트 항상 해봐야지 말만 해놓고 안했기 때문에 데이터도 있으니 디자인 상관하지말고 해보자 마인드 였다.
- 스켈레톤 UI 해보면 좋은 경험이 되지 않을까 싶어 하게되었다.

<h2>❗ 어려웠던점</h2>

- 라우터 설정에서 굉장히 애를 먹었다.
- 라우트 컴포넌트는 굉장히 쉽게 만들었는데 Link to 설정에서 1시간가량 씨름을 했다.
- 아직도 저 경로가 왜 맞는지 이해를 못했다.
- 한번 더 따로 개인프로젝트를 진행하게 된다면 감을 읽힐지도 모른다.

```
<Link to="/dress/makeup"> 메이크업 </Link>
<Route path="/dress/makeup" element={<MakeupList />} />
```

<h2>📎 아쉬운점</h2>

- 궁긍적인 목표는 디자인은 무한스크롤 스켈레톤UI 였다.
- 지금 진행된 홈페이지는 첫 로딩 스켈레톤UI 디자인만 되었다.
- 리액트 실력이 아직도 한참 부족하다는걸 알았다. 프로젝트 진행하면서 구글링을 몇번한건지 모르겠다

<h2>✈ 프로젝트 진행</h2>
1. 리액트 앱을 먼저 만들었다.

```
npx create-react-app skeletonui

```

2.리액트 앱 로고 뭐 css 불피요한 요소는 지웠다. <br>
App.js

```
function App() {
  return (
    <div>
    </div>
  );
}

```

3. 스켈레톤 UI 디자인을 위한 설정

- 스켈레톤 디자인을 보려면 로딩이 필요하다
- 로딩을 일부로 useEffect로 로딩을 2초 주었다.

```
const DressList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const handleImageError = (event) => {
    event.target.src = defaultImage;
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

   if (isLoading) {
    return <SkeletonLoader />;
  }

```

4. json 데이터를 map으로 불러와 html 작성

```
return (
    <div>
      <Nav />
      <h1>Dress List</h1>

      <ul className={styles.dress}>
        {jsonData.dress.map((item, index) => (
          <li className={styles.item} key={index}>
            <img
              className={styles.img}
              src={item.image_url}
              alt={`Dress ${index + 1}`}
              onError={handleImageError}
            />
            <div className={styles.info}>
              <p>{item.info_wrap}</p>
              <p>{item.region}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
```

5.스켈레톤 디자인

- 의도치 않게 하드코딩이 되었다.
- 디자인 css는 밑의 html과 동일하게 작성했다.

```
const SkeletonLoader = () => {
  // Replace this with your skeleton loading UI
  return (
    <>
      <h1>loading</h1>
      <ul className={styles.skeleton}>
        <li>
          <img className={styles.skitelist} />
          <div className={styles.skeinfo}></div>
        </li>
        //동일한 코드 6개
        <div className={styles.info}></div>
      </ul>
    </>
  );
};
```

6. 라우터 설정

- nav바로 움직이게 만들고싶었다.

```
npm install react-router-dom
```

7. router 컴포넌트, nav 컴포넌트 생성

```
function App() {
  return (
    <div>
      <Router />
    </div>
  );
}

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DressList />} />
        <Route path="/dress/makeup" element={<MakeupList />} />
        <Route path="/dress/studio" element={<StudioList />} />
      </Routes>
    </BrowserRouter>
  );
};

// 각  dress, studio, makeup.js 에다가 <Nav /> 추가
function Nav() {
  return (
    <div>
      <Link to="/"> 드레스 </Link>
      <Link to="/dress/makeup"> 메이크업 </Link>
      <Link to="/dress/studio"> 스튜디오 </Link>
    </div>
  );
}
```
