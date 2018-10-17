---
title: '[Java/Thread/DataStructure] Java Thread와 Queue를 이용여 Producer & Consumer 패턴 구현하기'
type: 'post'
author: 'Seolhun'
date: '2099-03-28'
weight: 1
categories: ['Java', 'Thread', 'DataStructure']
categories_weight: 10
tags: ['Java', 'Thread', 'Qeue', 'Producer', 'Consumer', 'Pattern']
tags_weight: 10
---
안녕하세요, 설훈입니다.
이번에는 Java Thread를 이용하여 기본적인 LifeCycle을 이해하고 코드를 작성해볼까 합니다.
예제는 Thread 생산자 소비자 패턴과 함께 설명하겠습니다.


## Intro
Java Thread는 Java Programming의 필수적인 요소라고 할 수 있습니다. 그 중 상태에 대해서 잘 알아야합니다.
스레드에서 스레드 간 상태를 제대로 관리하지 않으면 교착상태(DeadLock)에 빠지거나, 동기화가 제대로 되지 않아 값이 변질되는 큰 문제를 일으키게 됩니다.
위와 같은 문제는 주로 멀티 스레드(Multi-thread)에서 발생합니다.

- 교착상태 (DeadLock) 란?
    - 멀티 스레드 중 스레드간에 대기 상태가 종료 되지 않아 무한정 대기만 하는 비정상적인 상태이다.

#### Thread의 장점
- 생성, 종료, context switching 비용이 적어 경제적이다.
- Process와는 다르게 Thread 간 빠르게 정보교환을 할 수 있다.
- 마지막으로 멀티프로세서 환경에서 매우 유용하다. 각각의 Thread는 다른 프로세서에서 병렬적으로 동작할 수 있다.

#### 스레드의 단점
- 동시에 복수 개의 코드가 같은 주소 공간에서 실행됨으로써 서로 간섭하고 영향을 주는 경우가 빈번하여 주소 공간 분리의 이점이 없다.
- 공유자원(메모리지역의 전역변수)을 보호하기가 어렵다.
  - 같은 주소(Thread)에서 일련의 코드가 실행되기 때문에, 다른 주소의 스레드는 이를 알지 못합니다. 그래서 동기화를 해주어야 합니다.
- 스레드간의 실행 순서를 전혀 예측 할 수 없어 디버깅이 어렵다.

## Contents
#### - Java Thread State를 나타내는 용어들
1. New
    - Thread 클래스의 인스턴스를 만들고, start()메서드를 호출하기 전인 Thread의 사용되지 않은 새상태입니다.

2. Runnable
    - Thread는 start() 메소드 호출 후부터 실행 가능한 상태이지만, Thread 스케줄러가 Thread를 실행중인 Thread로 선택하지 않은 상태입니다.

3. Running
    - Thread 스케줄러가 해당 Thread를 실행 중인 상태입니다.

4. Non-Runnable (Blocked)
    - Thread가 아직 살아 있지만 현재 실행할 수 없는 상태입니다.

5. Terminated
    - run() 메서드가 종료되면 Thread가 종료되거나 죽은 상태가됩니다.


#### - Java Thread를 제어하는 메소드
<sub>
  <img src='../../../images/contents/20180322/Thread_Life_Cycle.jpg' width='100%' height='100%'>
  - Java Thread state control Method
</sub>

- Thread의 인스턴스를 생성한 후 Thread를 실행시키기 있는 상태를 만들기 위해 `start()` 메소드를 호출하여야 합니다.
- Runnable 상태가 되었으면 Thread는 Runnable(실행 가능상태)가 되어 `run()`을 통해 Thread를 실행할 수 있습니다.
- Sleep(), wait()을 통해 해당 thread를 대기상태로 만들 수 있으며, wait()의 경우 notify()를 통해 다시 Running상태로 만들 수 있습니다.

#### - 코드로 알아보겠습니다.
1. Task의 작동을 확인하기 위한 Message 도메인을 정의하겠습니다.
    - 간단히 property는 id와 content만 만들겠습니다.
```java
public class Message {
    private int id;
    private String content;

    public Message(int id, String content) {
        this.id = id;
        this.content = content;
    }

    //getter

    @Override
    public String toString() {
        return "{" +
            "id: "+ this.id + "," +
            "content: "+this.content + "" +
        "}";
    }
}
```

2. 각 Message domain을 Queue에 담아 처리할 수 있게 간단하게 도메인을 정의하였습니다.
```java
import java.util.Queue;

public class Tasks<T> {
    private Queue<T> taskQueue;

    public Tasks(Queue<T> taskQueue) {
        this.taskQueue = taskQueue;
    }

    public void printTasks() {
        for (T t: taskQueue) {
            System.out.println(t);
        }
    }
}
```

3. Messages들을 생성 할 Producer를 구현합니다.
```java
import java.util.Queue;
import java.util.concurrent.BlockingQueue;
import java.util.concurrent.LinkedBlockingQueue;

public class Producer implements Runnable {
    private BlockingQueue<Messages> messagesQueue;

    public Producer(BlockingQueue<Messages> messagesQueue) {
        this.messagesQueue = messagesQueue;
    }

    public void run() {
        System.out.println("Producer Thread Run");
        for (int i = 0; i < 10; i++) {
            Queue<Message> appQueue = new LinkedBlockingQueue<>();
            for (int j = 0; j < 10000; j++) {
                appQueue.add(new Message(j, i + " Hello Message "+j));
            }

            Messages messages = new Messages(appQueue);
            messagesQueue.add(messages);

            try {
                System.out.println("Producer apps queue is created : "+i);
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
        System.out.println("Producer thread is finished");
    }
}
```

4. Messages들을 소비할 Consumer를 구현합니다.
```java
import java.util.concurrent.BlockingQueue;

public class Consumer implements Runnable {
    private BlockingQueue<Messages> queue;

    public Consumer(BlockingQueue<Messages> queue) {
        this.queue = queue;
    }

    @Override
    public void run() {
        System.out.println("Consumer Thread Run");
        try {
            while(true) {
                Messages messages = queue.take();
                messages.printMessages();
                System.out.println("Consumer messages is read");
                Thread.sleep(1000);
            }
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println("Consumer thread is finished");
    }
}
```

5. 실행해봅니다.
```java
import java.util.concurrent.ArrayBlockingQueue;

public class Main {

    public static void main(String args[]) {
        ArrayBlockingQueue<Messages> queue = new ArrayBlockingQueue<>(100);

        Thread consumer = new Thread(new Consumer(queue));
        Thread producer = new Thread(new Producer(queue));
        producer.run();

        try {
            producer.join();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        consumer.run();
    }
}
```

## Outro

## References
- [나무위키 - 큐란 무엇인가?](https://namu.wiki/w/%ED%81%90(%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0))
- [두근두근 콩닥콩닥 블로그 - Thread란?](http://knightbw.tistory.com/34)
