[TOC]



## Laravel Events and Listeners

 > **`Event-driven programming`** `has become an essential part of modern web application development`





 ### Understanding Laravel Events and Listeners

  > `Laravel’s event system provides` **`a way to communicate between different components of an application`** `in a decoupled manner`. **`Events represent`** `significant actions or occurrences within your application,` **`such as a user registration, a payment confirmation, or a blog post being published`**. **`Listeners`**, `on the other hand, define the` **`logic`**` that should be executed` **`when a specific event occurs.`**



  ### Creating Events

- ` will create a new UserRegistered event class` **`in the app/Events directory.`**

  ```bash
  php artisan make:event UserRegistered
  ```

  ```php
  <?php
  
  namespace App\Events;
  
  use Illuminate\Broadcasting\Channel;
  use Illuminate\Broadcasting\InteractsWithSockets;
  use Illuminate\Broadcasting\PresenceChannel;
  use Illuminate\Broadcasting\PrivateChannel;
  use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
  use Illuminate\Foundation\Events\Dispatchable;
  use Illuminate\Queue\SerializesModels;
  
  class UserRegistered
  {
      use Dispatchable, InteractsWithSockets, SerializesModels;
      public $name;
      public function __construct($name)
      {
          $this->name = $name
      }
      
      public function broadcastOn()
      {
          return new PrivateChannel('channel-name');
      }
  }
  ```
  
  



### Creating Event Listeners

- ##### `Next, let’s` **`create a listener to handle the UserRegistered even`**

- `You can generate a new listener class using the`  **`make:listener Artisan command`**

- `Listeners are also simple classes and are typically stored` **`in the app/Listeners directory.`**

  ```bas
  php artisan make:listener SendWelcomeEmail --event=UserRegistered
  ```

  ```php
  <?php
  
  namespace App\Listeners;
  
  use App\Events\UserRegistered;
  use Illuminate\Contracts\Queue\ShouldQueue;
  use Illuminate\Queue\InteractsWithQueue;
  
  class SendWelcomeEmail
  {
      public function __construct()
      {
          //
      }
  
      public function handle(UserRegistered $event)
      {
    print_r($event->email);
    //We can send a mail from here
    echo ".. From Listeners";
    exit;
      }
  }
  ```
  
  



### Registering Listeners

- **` After creating the listener, you need to register it in Laravel’s event service provider.`** `The service provider is responsible for binding events to their respective listeners.` Open the **`EventServiceProvider`** `class located in the` **`app/Providers`** `directory`. `In the` **`listen` **`property, you can register your events and their associated listeners.`

  ```php
  protected $listen = [
      UserRegistered::class => [
          SendWelcomeEmail::class,
      ],
  ];
  ```

  

### Dispatching Events

- **`To trigger an event, you need to dispatch it. `**

- ` Dispatching an event is as simple as creating a new instance of the event class and calling the `**`dispatch()`** `method on it. You can dispatch an event from anywhere in your application.`

  ```php
  event(new UserRegistered($user));
  ```



### Using Event Subscribers

- `Event subscribers provide a convenient way to organise multiple event listeners into a single class.`

  ```php
  <?php
   
  namespace App\Listeners;
   
  use Illuminate\Auth\Events\Login;
  use Illuminate\Auth\Events\Logout;
  use Illuminate\Events\Dispatcher;
   
  class UserEventSubscriber
  {
     
      public function handleUserLogin(string $event): void {}
  
      public function handleUserLogout(string $event): void {}
      
      public function subscribe(Dispatcher $events): void
      {
          $events->listen(
              Login::class,
              [UserEventSubscriber::class, 'handleUserLogin']
          );
   
          $events->listen(
              Logout::class,
              [UserEventSubscriber::class, 'handleUserLogout']
          );
      }
  }
  ```
  
  



### Handling Asynchronous Events with Queues

- `Laravel allows you to handle events asynchronously using queues.`
- ` By utilising queues, you can improve performance by offloading time-consuming tasks to background workers. `
- `To enable queue handling for events, you need to configure Laravel’s queue system and specify which queues your listeners should use.`
- ` To specify that a listener should be queued, add the` **`ShouldQueue`**` interface to the listener class.`





### Testing Laravel Events and Listeners

- `Laravel provides a convenient testing framework for testing events and listeners.`

- ` You can write tests to ensure that events are fired correctly and listeners perform the expected actions. `

- `The testing framework also supports mocking and assertions to simplify your testing process.`

- `For example in this test we instruct Laravel to not execute the event’s listeners. We then call the logic to register a user, then assert that the`

  ```php
  /** @test */
  public function test_a_user_registration_sends_a_welcome_email(): void
  {
      Event::fake();
  
      $attributes = User::factory()->raw();
  
      $this->postJson(route('auth.register.store'), $attributes);
  
      Event::assertDispatched(SendWelcomeEmail::class);
  }
  ```






# Laravel 8 Events and Listeners With Example

## Introduction

Laravel provides a simple mechanism for events and listeners so that whenever you want to subscribe or listen to any event of your application, you can do it easily. You can register events with their listeners and decide what you want them to do after a particular action. For example, whenever a new order is created, we wish to send a mail or SMS to the seller. To simplify, we can say an event is an action taken in the application, and the listener is the operation that responds to the event.

In this tutorial, we will learn and explore **Laravel 8 events and listeners**. We will develop a small demo application in which we will send an email whenever a user is created. In this scenario, we can say user creation is an event, and the listener will send an email on listening to the event.



### Register Event and Listener

- `The first step is to register the event and the respective listener. For that, Laravel provides an EventServiceProvider.php file where you can define events and listeners.`

- `The $listen property contains an array for registering all the events and listeners as key-value pairs. Define events and listeners as shown below.`

  ```php
  protected $listen = [
     Registered::class => [
       SendEmailVerificationNotification::class,
     ],
     'App\Event\UserCreated' => [
       'App\Listeners\SendEmail'
     ]
  ];
  ```

  



### Generate Event and Listener

- `Once you register the event and listener, run the below command to create the files for the respective event and listener.`

  ```php
  php artisan event:generate
  ```

  ```php
  //App\Event\UserCreated.php
  namespace App\Event;
  
  use Illuminate\Broadcasting\Channel;
  use Illuminate\Broadcasting\InteractsWithSockets;
  use Illuminate\Broadcasting\PresenceChannel;
  use Illuminate\Broadcasting\PrivateChannel;
  use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
  use Illuminate\Contracts\Queue\ShouldQueue;
  use Illuminate\Foundation\Events\Dispatchable;
  use Illuminate\Queue\SerializesModels;
  
  class UserCreated implements ShouldQueue
  {
      use Dispatchable, InteractsWithSockets, SerializesModels;7i
  
      public $email;
     
      public function __construct($email)
      {
          $this->email = $email;
      }
  
      public function broadcastOn()
      {
          return new PrivateChannel('channel-name');
      }
  }
  ```
  
  

### Define Listener Logic: handle() method

- `ere, we will write actual logic for sending an email whenever the user is created. In **App\Listeners\SendEmail.php**, pass the UserCreated $event parameter to handle() method so that we can have a value from the event. The logic within the *handle()* method will be executed whenever the event is called.`

  ```php
  public function handle(UserCreated $event)
   {
    print_r($event->email);
    //We can send a mail from here
    echo ".. From Listeners";
    exit;
   }
  ```

  

### Dispatch Event

- `After creating the event and listener, now it’s time to dispatch the event. It’s pretty straightforward; you just need to pass the event class object to the *event()* method.`

  ```php
  event (new UserCreated(“abc@gmail.com”));
  ```

  
