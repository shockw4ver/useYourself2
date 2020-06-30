---
title: "面向对象（一）"
date: "2019-12-12"
fill: "rgb(23, 82, 142)"
tags:
  - "OOP"
  - "JavaScript"
---

- 封装（Encapsulation）
- 抽象（Abstraction）

## 过程化编程（Procedural Programming）

> 过程式程序设计，又称过程式编程、过程化编程，一种编程典范，有时会被视为是指令式编程的同义语。派生自结构化编程，主要采取程序调用或函数调用的方式来进行流程控制。
>
> ——维基百科

```javascript
// highlight-start
const guys = ["Zhangsan", "Lisi", "Wanger", "Mazi"]

async function main() {
  const luckyGuy = guys[Math.floor(Math.random() * guys.length)]
  console.log("系统正在 500000+ 名会员中抽取幸运奖！请稍等...")
  await delay(3)
  console.log(`恭喜 ${luckyGuy} 获得本次十万现金大奖！`)
}
// highlight-end

function delay(seconds) {
  const ms = seconds * 1000
  return new Promise(ok => {
    setTimeout(() => ok(), ms)
  })
}
```

恐怕大多数 coder 最早进行的编程的时候都是在进行过程化编程，主要有两点原因：

- C 语言是计算机相关专业必修也是学习的第一门编程语言，同时也是最为世人知晓的过程化编程语言
- 对于绝大部分语言来说，知道其函数的使用方法便足以写出具有一定规模的程序

这使得许多 coder 还并不自觉是在使用这样一种编程范式的时候，就已经对其有了深入的体验。

然而随着商业需求的日益增多，应用程序的规模也逐渐增大，过程化编程的一些缺点也体现了出来，举最显著的例子：

- Spaghetti Code：指各种函数相互调用，其程序结构乱得如同一盘意大利面，维护成本极高
- 难扩展、难复用：代码与代码之间耦合度高，扩展和复用的难度随程序规模的扩大会越来越难以估量

这些根本上的问题使得计算机科学家们不断地研究更好的编码方式来面对程序规模的膨胀，后来面向对象编程范式成为了一个很重要的解决方案。

## 面向对象编程（Object-Oriented Programming）

> **面向对象程序设计**（英語：Object-oriented programming，缩写：OOP）是種具有**物件**概念的**编程范式**，同时也是一种程序开发的抽象方针。它可能包含**资料**、**属性**、**代码**與**方法**。对象則指的是**类**的实例。它将**对象**作为**程序**的基本单元，将程序（方法）和数据**封装**其中，以提高软件的重用性、灵活性和扩展性，物件裡的程序可以訪問及經常修改物件相關連的資料。在物件導向程式編程裡，電腦程式會被設計成彼此相關的物件。
>
> ——维基百科

面向对象其实并不新鲜，早在 1967 年推出的 Simula 语言就已经提出了这个概念，但当时的程序员们主要都是在硬件上玩儿，程序规模也并不是那么庞大，所以并未在业内引起多大的重视。

越接近当代，编程的趋势就越往应用层偏移，计算机程序有了前所未有的庞大规模，然而过程化编程和结构化编程难复用、难扩展的问题从根本上限制了应用层程序的开发效率，**面向对象编程**迎来了大展身手的机会。

PS：现如今，面向对象这个理念已经不限于编程的范畴，它已经成为一种理解事物的方式，贯穿于各种领域之中，分享后段将根据相关内容来补充这个概念。

### 优势

对比过程化编程，我们直接列出面向对象最显著的三点优势：

- 易维护
- 易复用
- 易扩展

### 基础概念

面向对象编程范式的基础概念有以下几点：

- 封装
- **抽象**
- 继承
- 多态

### 封装

> 它将**对象**作为**程序**的基本单元，将程序（方法）和数据**封装**其中，以提高软件的重用性、灵活性和扩展性，物件裡的程序可以訪問及經常修改物件相關連的資料。

如引文所述，封装其实很好理解，就是把一些数据和方法封装在一个有界的单元中，例如：

```javascript
class Unit = {
  data1 = 1;
  data2 = 2;

  method1() {
    return this.data1 + this.data2;
  }
}
```

可以看到，封装本身并不是一件复杂的事情，而封装的重点其实在于，如何进行封装，简化为三个问题：

- 封装的界限（范畴）是什么？—— Unit 是什么？
- 需要把哪些东西封装起来？—— data1、data2、data3……都是什么？
- 封装后的单元能做什么？—— method1、method2、method3 都是什么？

那么，我们以一个简单的二维码购置课程需求为例，来分别回答这三个问题：

- Unit 是什么？

  当然就是支付了，我们将其命名为 Payment：

  ```javascript
  class Payment {}
  ```

  那么我们思考一下，一个支付的流程是怎样的呢？

  1. 选择商品
  2. 发起支付
  3. 付款
  4. 购买成功

  好了，我们对支付封装的范畴就是这个流程了，由此进入后面的问题。

- data1、data2、data3……都是什么？

  对前面的支付流程里梳进行梳理可得：

  ```javascript
  class Payment {
    /**
     * 选择商品
     *
     * course：通常来说，商品会带有标签，提供价格、优惠、条码等信息
     * userInfo：
     *  - 谁要买
     *  - ta 是 vip 吗？
     * 这些信息哪儿来呢？我们需要一个 constructor 来接收它们
     */
    course = {
      courseId: "", // 条码
      price: "", // 价格
      discount: "", // 折扣
      vipPrice: "", // 会员价
    }

    userInfo = {
      userId: "",
      isVip: false,
    }

    constructor(course, userInfo) {
      this.course = course
      this.userInfo = userInfo
    }

    /**
     * 发起支付
     *
     * 这应该是一个行为（method）
     */

    /**
     * 付款
     *
     * 这应该是一个行为（method）
     */

    /**
     * 购买成功
     *
     * 购买可能处于就绪、成功、失败、超时或者正在进行的任一状态，我们如下定义：
     * 0：就绪；(default)
     * 1：等待支付；
     * 2：支付成功；
     * 3：支付失败；
     * 4：超时；
     */
    status = 0
  }
  ```

  好了，这就是第一步梳理出来的**数据**了，但是否已经足够呢？往下继续。

- 封装后的单元能做什么？—— method1、method2、method3 都是什么？

  基于前面的梳理所得，我们来进一步完善 Payment：

  ```javascript
  import {
   	pay,
    getPaymentStatus
  } from 'path/to/payment/api';
  import {
    delay
  } from 'path/to/utils/contains/delay'

  class Payment {
    /**
     * 选择商品
     *
     * course：通常来说，商品会带有标签，提供价格、优惠、条码等信息
     * userInfo：
     *  - 谁要买
     *  - ta 是 vip 吗？
     * 这些信息哪儿来呢？我们需要一个 constructor 来接收它们
     */
    course = {
      courseId: '', // 条码
      price: '',    // 价格
      discount: '', // 折扣
      vipPrice: '', // 会员价
    }

  	userInfo = {
      userId: '',
      isVip: false
    }

  	constructor(course, userInfo) {
      this.course = course;
      this.userInfo = userInfo;
    }

  	/**
     * 发起支付
     *
     * requestPayment：首先我们要向后台发起支付
     * pollingPaymentResult：发起之后我们需要获取支付结果（假设为轮询）
     */
  	async requestPayment() {
      let finalPrice = this.course.price;
      // 假设折扣价优先级大于会员价
      if (this.course.discount) {
        finalPrice = this.course.price * this.course.discount;
      } else if (this.userInfo.isVip) {
        finalPrice = this.course.vipPrice;
      }
      const courseId = this.course.courseId;
      const userId = this.userInfo.userId;

      const res = await pay({
        userId,
        courseId,
        price: finalPrice
      });
      this.status = 1;

      return res; // res 里可能包含二维码的 Url
    }

  	/**
  	 * 轮询总不能永远询下去吧，那么我们需要一个计数器，和一个轮询次数限制
  	 */
  	maxPollingTimes =30;
  	pollingTime = 0;

  	async pollingPaymentResult() {
      const courseId = this.course.courseId;
      const userId = this.userInfo.userId;

      if (this.status !== 1) {
        throw new Error('支付未发起！')
      }
      return new Promise(ok => {
        while (this.status === 1 && this.pollingTime <= this.maxPollingTimes) {
          const res = await getPaymentStatus({
            courseId,
            userId
          });

          // 假设 res 对应为：0-支付中、1-成功、2-失败
          if (res === 1) {
            this.status = 2;
          } else if (res === 2) {
            this.status = 3;
          } else {
            delay(1000); // 轮询间隔为 1s

            // 轮询完成以后进行响应的状态判断
            this.pollingTime += 1;
            if (this.pollingTime > this.maxPollingTimes) {
              this.status = 4;
            }
          }
        }


        ok(this.status);
      });
    }

  	/**
   * 付款
     *
     * 这应该是一个行为（method）
     * 由于二维码支付通过轮询来进行支付验证，所以我们不需要专门实现一个支付方法
     */

  	/**
     * 购买成功
     *
     * 购买可能处于就绪、成功、失败或者正在进行的任一状态，我们如下定义：
     * 0：就绪；(default)
     * 1：等待支付；
     * 2：支付成功；
     * 3：支付失败；
     */
  	status = 0;
  }
  ```

  以 dva 的 effects 为例，我们可以像这样使用它：

  ```javascript
  {
    //...
    effects: {
     	* doPay(payload, { select }) {
        const userInfo = yield select(state => state.user.userInfo);
        const courseInfo = yield select(state => state.course.courseInfo);

        const paymentIns = new Payment(courseInfo, userInfo);
        const res = yield paymentIns.requestPayment();
        // do something with `res`
        const paymentResult = yield paymentIns.pollingPaymentResult();

        // do something with `paymentResult`
      }
    },
    //...
  }
  ```

  如此一来，我们就将这个“支付”所包含的数据和方法等细节都封装到了一个单元中，并通过很简洁的方式对它进行了调用。这样做的好处除了直接减少 `doPay` 这个方法的代码量，使逻辑得到了**解耦**外，还提升了支付流程的**可重用性**，这样我们在其他地方要用到支付功能的时候，只需要直接使用或者扩展这个 Payment 类即可。同时，**对细节的隐藏**使我们的关注点分为了**使用 Payment** 和 **实现 Payment**，那么我们在进行维护的时候，那么需求变更的时候，我们只需要修改 Payment 类，那么所有的使用它的地方都可以受益。

#### 优点

综上所述，封装最显著的优势可以总结为以下几点：

- 减少耦合，分离关注点，代码更易维护
- 将对松散的逻辑管理转变为对类的管理，增强了数据的**可控性**
- 对类的扩展可以使类支持更多的逻辑，扩展性强和灵活性强

当然了，最大化的体现优点需要建立在良好的封装决策上，基本可以概括为是否良好的回答了前面的那三个问题。同时，随着需求的不断进化，相应的封装也需要随之一起渐进的调整，有时候甚至会将一个封装拆解为多个封装来保证扩展性和灵活性，这就牵扯到一个问题——抽象。

### 抽象

何为抽象？

> 从众多的具体事物中，抽取共同的、本质的属性，舍弃个别的、非本质的属性，从而形成概念。

从引文可知，抽象的目的就是要形成一个广义化的概念，也就是给予了我们一个思考的模式。那么面向对象编程范式为什么要抽象呢？

> 面向对象程序设计方法是尽可能模拟人类的思维方式，使得软件的开发方法与过程尽可能接近人类认识世界、解决现实问题的方法和过程，也即使得描述问题的问题空间与问题的解决方案空间在结构上尽可能一致，把客观世界中的实体抽象为问题域中的对象。

OK，就是要我们的程序逻辑尽量符合我们的思维逻辑，我们沿着前面那个支付需求来继续探讨这个问题。

前面我们的需求是“二维码支付”，因此我们的 Payment 类中仅仅实现了请求二维码和轮询这两个功能。然而大部分的购物类网站其实是支持多种支付方式的，如果在二维码支付的基础上，新增了一个银行卡支付，或许我们就要添加如下两个方法：

```javascript
class Payment {
  //...
  /**
   * 假设通过余额支付是先获取一个账单，然后等用户填写银行卡信息并确认支付
   */
  requestPaymentBill() {
    // 获取用户信息
    // 获取商品信息
    // 使用用户信息和商品信息获取账单
  }

  payByBalance(creditInfo /* 银行卡信息 */) {
    // 用户确认支付，根据银行卡信息调用相关接口进行扣费
  }
}
```

是的，这样扩展一下似乎已经满足我们的需求。但是，如果还要新增新一个余额支付（如知米）怎么办呢？继续扩展似乎可行，如果还有银联支付、a 钱包支付、b 钱包支付、c 钱包支付、他人代付呢？

Gosh！且不说真实的银行卡支付逻辑一般不会像示例中那么简单，就算是所有的支付方式都只需要新增两三个方法，那么 Payment 这个类也将变得无比庞大，难以管理。

按上文的思路，我们应该已经需要考虑进一步的封装了，但以上提到的支付方式其实都是存在于这个支付流程之中的，只是实现方式不一样，那我们到底要对什么进行封装呢？

<h1 style="text-align: center;">抽象！</h1>
没错，我们现在要做的就是从这些不同的支付方式中抽象出"共同的、本质的属性及行为"，并加以封装，成为**抽象类**。抽象类一般不会被实例化，其主要是作为其派生类的父类，并对派生类的属性及行为进行一些要求，就像每个门派的弟子都必须学习该门派的基本招式。沿着这个思路，我们来看看可以抽象出哪些东西来：

- 支付包含些什么？
  - 商品——商品标签
  - 用户身份——用户信息
  - 流程——支付状态
- 支付有哪些行为？
  - 发起支付——供调用者使用的统一接口
  - 轮询可以剔除了，因为它是二维码（或其他某种）支付方式才需要的

好了，先根据先前的实现抽象到这里，将它写出来！

```javascript
class Payment {
  course = {
    //... couresInfo
  }

  userInfo = {
    //... userInfo
  }

  status = 0

  requestPayment() {
    //... 尽管每种支付方式都有发起支付的流程，但其实现方式是不一样的
    //... 所以我们要求它的派生类都自己进行实现，如果未实现就调用，抛出错误
    throw new Error("自个儿实现去！")
  }
}
```

现在我们可以大致的想象出其子类的形式了：

- 二维码支付

  ```javascript
  class PaymentFromQr extends Payment {
    requestPayment() {
      //... 获取二维码
    }

    pollingPaymentResult() {
      //... 自己拥有的轮询需求
    }
  }
  ```

- 银行卡支付

  ```javascript
  class PaymentFromCreditCard extends Payment {
    requestPayment() {
      //... 获取适配银行卡支付的账单（手续费、扣除金额等）
    }

    payByCredit(creditInfo) {
      //... 这里可能是将用户填写的银行卡信息交付银行验证的过程
    }
  }
  ```

- 余额支付

  ```javascript
  class PaymentFromBalance extends Payment {
    requestPayment() {
      //... 获取适配钱包支付的账单
    }

    payByBalance() {
      //... 调用相关接口，服务器将从数据库中扣除用户余额
    }
  }
  ```

我们现在从 Payment 派生出了三种支付方式，根据前面的使用方式，我们可能有如下代码：

```javascript
{
  //...
  effects: {
    /**
     * 假设 payload 中包含一个 payWay 的字段标识支付方式，有如下对应：
     * 1：二维码支付；2：银行卡支付；3：余额支付
     */
    * doPay({ payload }, { select }) {
      const userInfo = yield select(state => state.user.userInfo);
      const courseInfo = yield select(state => state.course.courseInfo);
      switch (payload.payWay) {
        case 1: {
          const paymentIns = new PaymentFromQr(userInfo, courseInfo);
          const qrCode = await paymentIns.requestPayment();
          // do something with qrCode
          const result = await paymentIns.pollingPaymentResult();
          // do something with result
        }; break;
        case 2: {
          const paymentIns = new PaymentFromCreditCard(userInfo, courseInfo);
          const bill = await paymentIns.requestPayment();
          const creditInfo = await doSomethingWith(bill);
          const result = await paymentIns.payByCredit(creditInfo);
          // do something with result
        }
        case 3: {
          //... I don't wanna code!
        }
      }
    }
  }
}
```

啊，好繁琐，难道每多一个支付方式就要写几句吗？

其实我们通过观察可以发现，尽管是不同的支付方式，但它们的使用方式是有迹可循的，基本为：

1. 实例化一次支付流程
2. 获取某种信息（payload）
3. 得到结果

那么，我们能否将这个使用流程也抽象进 Payment 呢？比如我们希望这样使用它：

```javascript
const payWayMap = {
  1: PaymentFromQr,
  2: PaymentFromCreditCard,
  3: PaymentFromBalance
};

{
  //...
  effects: {
    /**
     * 假设 payload 中包含一个 payWay 的字段标识支付方式，有如下对应：
     * 1：二维码支付；2：银行卡支付；3：余额支付
     */
    * doPay({ payload }, { select }) {
      const userInfo = yield select(state => state.user.userInfo);
      const courseInfo = yield select(state => state.course.courseInfo);
      const PayWayClass = payWayMap[payload.payWay];
      const paymentIns = new PayWayClass(userInfo, courseInfo);
      paymentIns.start()
        .onReceivePayload(payload => doSomethingWith(payload))
        .onEnd(result => doSomethingWith(result));
      }
    }
  }
}
```

唔，这就很柔顺。但我们怎么来实现呢？像银行卡支付的 `creditInfo` 要怎么注入到其中去呢？我们在之后的**继承**和**多态（玄学）**中将会探讨这个问题。
