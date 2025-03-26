<!-- @format -->

# dev-hw-calendar

### 👷🏻 코드 공사 중 : 모노레포

[ 목 표 ]
공통 컴포넌트는 모듈화해 배포하고 공통으로 사용하는 의존성의 버전관리를 모노레포 루트 폴더에서 진행합니다.

-   [ ] 세미 모노레포를 구성하고, 마이크로 프론트엔드를 구축합니다. <br/> - 디자인 시스템 / 공통 패키지 : hw-packages <br/> - 데이트 피커 : date-picker <br/> - 모노레포 루트 : dev-hw-date-picker <br/>
        <br/>
        <br/>

✅ **date-picker** <br/>
![date-picker](https://github.com/user-attachments/assets/53e51011-cead-42c1-b6f3-44444d53beed)

✅ **calendar** <br/>
![GIFMaker_me](https://github.com/user-attachments/assets/8da6ad1e-6086-46a1-8441-d514e37e37d6)
<br/>

### ✓ 제공기능

----------------------[ **calendar** ]----------------------

-   날짜 선택
-   이전, 이후 달
-   이전, 이후 년도
    <br/>

--------------------[ **date-picker** ]--------------------

<br/>

-   인풋 선택시 캘린더 노출
-   날짜 선택
-   인풋 아이콘 달력 아이콘 선택

<br/>
<br/>

## 요약

-   `npm install dev-hw-calendar` 또는 `yarn add dev-hw-calendar`를 통해 라리브러리를 install 하세요.
-   프로젝트에 `import { Calendar,DatePicker } from 'dev-hw-calendar'` 하여 캘린더를 가져오세요.
-   컴포넌트에 <Calendar/>, <DatePicker/> 를 추가해 사용하세요.
    -   필요한 컴포넌트만 import하여 추가해서 사용하면 됩니다.

<br/>
<br/>

## Demo : 빠른 시작

### Installation

```
npm
$ npm install dev-hw-calendar

yarn
$ yarn add dev-hw-calendar
```

### Usage

```
import { useState } from 'react';
import { Calendar,DatePicker } from 'dev-hw-calendar';

function MyApp() {
  const [value, onChange] = useState();

  return (
    <div>
      <Calendar onChange={onChange} />
      <DatePicker />
    </div>
  );
}
```

<br/>
<br/>

## API Guide

### Calendar Prop

| Prop name | Description                           | Default value | Eaxmple                                         |
| --------- | ------------------------------------- | ------------- | ----------------------------------------------- |
| value     | 선택된 날짜                           | 현재 날짜     | Date: new Date() <br/> String: 2017-01-01       |
| onChnage  | 선택된 날짜로 바꿔주는 함수(setState) | n/a           | (value, event) => alert('New date is: ', value) |

<br/>
<br/>

### Date Picker Prop

| Prop name | Description                   | Default value | Eaxmple |
| --------- | ----------------------------- | ------------- | ------- | --- | ----- |
| showIcon  | input에 달력 아이콘 노출 여부 | false         | true    |     | false |

## After...

-   기능 추가
    -   여러기능을 제공 할 예정입니다.
-   라이브러리 설명 홈페이지 만들어볼 예정입니다.

<br/>
<br/>

## Study Blog

[✨ 데이트피커 성능 최적화](https://dev-raccoon-man.tistory.com/78)
<br/>
[✨ 캘린더 오픈소스 배포](https://dev-raccoon-man.tistory.com/74)
<br/>
[✨ 캘린더 제작기](https://dev-raccoon-man.tistory.com/75)
