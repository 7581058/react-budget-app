## react-budget-app

Budget Calculator 를 클래스형으로 만든 후 함수형으로 수정해보기

### 스택

config  
<img src="https://img.shields.io/badge/npm-CB3837?style=flat&logo=npm&CB3837&logoColor=white"/></a>

development  
<img src="https://img.shields.io/badge/react-61DAFB?style=flat&logo=react&logoColor=white"/></a> <img src="https://img.shields.io/badge/typescript-3178C6?style=flat&logo=typescript&logoColor=white"/></a> <img src="https://img.shields.io/badge/styledcomponents-DB7093?style=flat&logo=styledcomponents&logoColor=white"/></a> <img src="https://img.shields.io/badge/antdesign-0170FE?style=flat&logo=antdesign&logoColor=white"/>

enviroment  
<img src="https://img.shields.io/badge/github-181717?style=flat&logo=github&logoColor=white"/></a> <img src="https://img.shields.io/badge/git-F05032?style=flat&logo=git&logoColor=white"/></a> <img src="https://img.shields.io/badge/visualstudiocode-007ACC?style=flat&logo=visualstudiocode&logoColor=white"/></a>

### 정리

**React Hooks이 필요한 이유?**  
Class Component로 사용되어온 React에서 느껴왔던 불편함이나 문제점들을 해결하기 위해 개발됨

|  Class Component  | Functional Component |
| :---------------: | :------------------: |
| 더 많은 기능 제공 |  더 적은 기능 제공   |
|   더 긴 코드 양   |     짧은 코드 양     |
|  더 복잡한 코드   |    더 심플한 코드    |
|     더딘 성능     |     더 빠른 성능     |

</br>
생명주기를 함수형 컴포넌트에서는 사용을 못했기 때문에 클래스형 컴포넌트를 써옴  
  
=> React 16.8 Hooks 업데이트로 변경됨

**코드가 간결해짐**  
Class Component 에서는 생명주기를 이용할 때 componentDidMount 와 componentDidUpdate componentWillUnmount 다르게 처리를 해주지만 리액트 훅을 사용할때는 useEffect 안에서 다 처리해줄 수 있음

**HOC컴포넌트를 Custom React Hooks로 대체해 많은 Wrapper 컴포넌트를 줄이게 됨**

```
HOC(Higher Order Component)란?
화면에서 재사용 가능한 로직만을 분리해 컴포넌트로 만들고 재사용 불가능한 다른 부분들은 parameter로 받아서 처리하는 방법
```

공통적인 부분은 HOC컴포넌트에 넣어주고 HOC컴포넌트로 각각의 컴포넌트를 감싸는 방법이 추천되었으나 너무 많은 Wrapper 컴포넌트가 생길 수 있고, 데이터 흐름을 파악하기가 힘들어짐  
=> Custom React Hooks 를 이용해 해결
