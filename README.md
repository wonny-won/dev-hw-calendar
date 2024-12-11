# dev-hw-calendar
> 📌 **요일은 아직 적용안됐습니다.**

<br/>

![GIFMaker_me](https://github.com/user-attachments/assets/95bd92ae-613f-4162-98c0-b6a7f2598936)
### ✓ 제공기능
- 날짜 선택
- 이전, 이후 달
- 이전, 이후 년도

<br/>

## 요약
- ```npm install dev-hw-calendar``` 또는 ```yarn add dev-hw-calendar```를 통해 라리브러리를 install 하세요.
- 프로젝트에 ```import { Calendar } from 'dev-hw-calendar'``` 하여 캘린더를 가져오세요.
- 컴포넌트에 <Calendar/> 를 추가해 사용하세요.

<br/>

## Demo : 빠른 시작
### Installation
```
npm install dev-hw-calendar
yarn add dev-hw-calendar
```

### Usage
```
import { useState } from 'react';
import { Calendar } from 'dev-hw-calendar';

function MyApp() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}
```

<br/>

## API Guide
### Calendar Prop
| Prop name | Description | Default value | Eaxmple |
|-------|----------------|---------|--------|
|value| 선택된 날짜 | 현재 날짜 | Date: new Date() <br/> String: 2017-01-01 |
|onChnage| 선택된 날짜로 바꿔주는 함수(setState) | n/a | (value, event) => alert('New date is: ', value) |

## Study Blog 
[✨ 캘린더 오픈소스 배포](https://dev-raccoon-man.tistory.com/74)
