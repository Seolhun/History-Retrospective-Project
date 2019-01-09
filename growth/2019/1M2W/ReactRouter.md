# React Router
- React router v3 > v4 Migration
- Landing Auth > Airbridge Migration
- Applying HoC Pattern on Router

---
## Purpose

1. React Router와 Layout 구조 분리하기
2. Layout의 구조를 분리하여 각각 기능에 따른 Container로 운영하기.
3. HoC를 이용한 Data Rendering Hierarch 구조 구성하기
4. redirect, alert 헬 해결하기. Product 내에 controll 되지 않는 기능 문제 해결 (airbridge-landing)

---
## Why

### 1. Hierarchy 문제
현재 우리 구조는 `로그인 > 앱 > 대시보드` 구조로 계층 별 필요한 권한과 필요한 데이터를 사전에 확인해야 함.

> 이전 코드가 이를 확인하지 않았던 것은 아님, 다만, 우선순위(HoC 패턴)가 고려된 구조가 아니었던것이 문제.

1. 간단한 예로, 현재 `앱 > 대시보드 과정에서 필요한 데이터가 대시보드 랜더링 전에 로드되지 않음. 혹은 코드 구조상 중간에 업데이트 되는 현상이 발생 됨`
2. 대시보드의 레이아웃이 Layout container로 공통으로 사용하여 Layout container 안에 로직이 두개의 로직을 복잡하게 가지고 있음.
3. 즉, 이러한 몇 안되는 조건을 분기하는 것에 대한 어려움이 있고, 이러한 것이 Layout을 Re-rendering을 시켜, 하위 Component에게도 영향을 미침


### 2. Re-Rendering 문제
과거 Layout에서 Layout에서 새로운 데이터가 dispatch 될 때마다 내부에 있는 Router가 연쇄적으로 Re-render가 발생되는 현상이 발생.

- 여기서의 문제는 HoC 이슈, 즉, Layout에 있는 값이 가장 먼저 변이되고 난 뒤에 Route의 값이 변이되지 않은 문제
- 코드로 보면, 이전 Layout의 `React.createElement(children, property)`의 코드에서 property의 값이 먼저 변하지 않으면, Router가 랜더링 된 이후 다시 Layout의 값이 변이되어 재랜더링이 되는 문제가 발생되던 것.


### 3. Alert Hell. Redirect Hell
Landing에서 SignUp/In을 해결하고 이를 Airbridge로 redirect 시키는 문제.
1. 유효하지 않은 유저를 Landing으로 보내야 함
2. 유효하지 않은 경우 alert로 경고를 보내기에 해당 Route의 업데이트 간 경고창을 계속 보게 됨.
	> 유효성 검사 코드와 window.alert 문제
3. `Airbridge Product가 Authentication(SignIn/Up)으로 인해 Landing 프로덕트에 의존성이 생김.`

---
## What to do

### - Prev
1. View
2. Router(routes)
	- callbackComponent
3. Layout

### - Current
1. View
2. Router(routes)
	- RouteWrapper(HoC)
3. CustomRoute(getFilteredRoutes)
4. Layout

### - The time to look into the code.
1. Layout의 구조를 분리하여 각각의 Container를 독립적으로 가져가기.
	- 코드로 보면, 위아래 코드가 다른 조건에 따라 랜더링을 다르게 함.
	- ```jsx
		// Layout.jsx
		<LayoutHeader />
		<HashRouter>
			<Switch>
				<Route {...} />
			</Switch>
		</HashRouter>
		<LayoutFooter />
		```
	- 그러나 현재, LayoutFooter만 존재하는 형태
2. React Router와 Layout 구조 분리하기
	- Router 내에 Layout과 Router 부분을 분리하여 랜더링 시키기
	- ```jsx
		<section
			id='main__container'
			data-status={this.getSidebarFoldingStatus()}
		>
			<HashRouter>
				<section>
					<LayoutNav
						isLogined={isLogined}
						pathname={pathname}
						selectedApp={selectedApp}
						subdomain={subdomain}
						userPermission={userPermission}
					/>
					<Switch>
						{getFilteredRoutes({
							isLogined,
							displayedDepth: 2,
						}).map((route, idx) => (
							<Route
								key={`${`${route.path}-${idx}`}`}
								component={route.component}
								exact={route.exact}
								path={route.path}
								render={route.render}
							/>
						))}
					</Switch>
				</section>
			</HashRouter>
		</section>
		```
	- Required Data가 없을 경우 Spinner 추가 예정
3. HoC Pattern 적용하기
- ```jsx
	// HoC Pattern
	const renderDashboardRoute = RouteComponent => routeProps => (
		<DashboardRoute {...routeProps}>
			<RouteComponent {...routeProps} />
		</DashboardRoute>
	);

	// Routes
	const routes = [
		/**
		* displayedDepthes: [1],
		*/
		buildRoute({
			exact: true,
			path: '/',
			render: routeProps => <SignInView {...routeProps} />,
		}),
		buildRoute({
			path: '/signup',
			render: routeProps => <SignUpView {...routeProps} />,
		}),
		/**
		* displayedDepthes: [2],
		*/
		buildRoute({
			exact: true,
			path: '/',
			render: () => <Redirect to='/app' />,
			displayedDepthes: [2],
		}),
		buildRoute({
			exact: true,
			path: '/myinfo',
			render: renderDashboardRoute(MyInfoPage),
			requireAuth: true,
			displayedDepthes: [2],
		}),
		// Never Change this easily
		buildRoute({
			render: (routeProps) => {
				enterHook();
				return <NotFoundView {...routeProps} />;
			},
			displayedDepthes: [1, 2],
		}),
	];
	```

---
## How to do
1. View 구성
	- Components
	- Containers
2. Routes 추가
	- `displayedDeplth`를 고려할 것
	- HoC 내부의 다른 로직이 필요하면 `DashboardRoute`에 추가
	- HoC의 다른 패턴이 필요하면 `DashboardRoute`와 같은 HoC 함수 추가 작성
3. Layout에 Routes 렌더링하기
	- Routes의 랜더링 조건이 더 필요하면 `getFilteredRoutes`함수에 추가 작성
		- `buildRoute` 함수와 연관되어 있으므로 추가 작성.
4. Layout에 조건에 맞게 작성하기.

## To do List
1. 유효성 검사 페이지 개선하기 (Not-found, Error, Un-authorized)
2. HoC 패턴 더 잘 활용하기 : Data API와 Data구조 정리하기
3. WatchRoute 함수 개선하기
3. Skeleton Rendering || Split Rendering으로 UI 개선하기
