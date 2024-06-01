## 											Tailwindcss 3



### Font Coloor

- https://tailwindcss.com/docs/text-color#setting-the-text-color

  ```css
  text-slate-50 		-> text-slate-950
  text-gray-50 	 	-> text-gray-950
  text-zinc-50  		-> text-zinc-950
  text-neutral-50	 	-> text-neutral-950
  text-stone-50 		-> text-stone-950
  text-red-50  		-> text-red-950
  text-amber-50 		-> text-amber-950
  text-yellow-50 		-> text-yellow-950
  text-lime-50 		-> text-lime-950
  text-green-50 		-> text-green-950
  text-emerald-50 	-> text-emerald-950
  text-teal-50 		-> text-teal-950
  text-cyan-50 		-> text-cyan-950
  text-sky-50 		-> text-sky-950
  text-blue-50 		-> text-blue-950
  text-indigo-50 		-> text-indigo-950
  text-violet-50		-> text-violet-950
  text-purple-50 		-> text-purple-950
  text-fuchsia-50		-> text-fuchsia-950
  text-rose-50 		->text-rose-950
  text-white
  text-black
  ```

  



### Text Aling

- https://tailwindcss.com/docs/text-align#setting-the-text-alignment

  ```css
  text-start
  text-end
  text-center
  text-left
  text-right
  text-justify
  ```

  



### Text Transform

- https://tailwindcss.com/docs/text-transform#basic-usage

  ```css
  uppercase
  lowercase
  capitalize	
  ```

  



### Font Size

- https://tailwindcss.com/docs/font-size#basic-usage

  ```css
  text-sm
  text-base
  text-lg
  text-xl
  text-2xl 
  text-9xl
  text-[207px] //custom px
  ```

  



### Font Weight

- https://tailwindcss.com/docs/font-weight

  ```css
  font-thin  /*ont-weight:100*/
  font-extralight	/*font-weight:200*/
  font-light	/*font-weight: 300;*/
  font-normal /*font-weight: 400;*/
  font-medium	/*font-weight: 500;*/
  font-semibold /*font-weight: 600;*/
  font-bold	/*font-weight: 700;*/
  font-extrabold	/*font-weight: 800;*/
  font-black	/*font-weight: 900;*/
  
  /*Hover, focus, and other states*/
  <p class="font-normal hover:font-bold"></p>
  
  /*Breakpoints and media queries*/
  <p class="font-normal md:font-bold"></p>
  ```

  



### Padding

- https://tailwindcss.com/docs/padding

  ```css
  Number 0 to 96 , https://tailwindcss.com/docs/padding
  <div class="pt-0">pt 0</div>
  <div class="pt-96">pt 96</div>
  <div class="pt-1 ...">pt-6</div>
  <div class="pr-4 ...">pr-4</div>
  <div class="pb-8 ...">pb-8</div>
  <div class="pl-2 ...">pl-2</div>
  
  /* Horizontal padding */
  <div class="px-8 ...">px-8</div>
  
  /* Add vertical padding */
  <div class="py-8 ...">py-8</div>
  
  /*Add padding to all sides*/
  <div class="p-8 ...">p-8</div>
  
  /*Hover, focus, and other states*/
  <div class="py-4 hover:py-8"></div>
  
  /*Breakpoints and media queries*/
  <div class="py-4 md:py-8"></div>
  ```

  



### Margin

```css
/*Number 0 to 96*/
<div class="mt-0 ...">mt-6</div>
<div class="mt-96 ...">mr-4</div>
<div class="mb-8 ...">mb-8</div>
<div class="ml-2 ...">ml-2</div>

m-auto	/* margin: auto; */
mx-auto	/* margin-left: auto; margin-right: auto; */
my-auto	/* margin-top: auto;margin-bottom: auto; */
ms-auto	/* margin-inline-start: auto; */
me-auto /* margin-inline-end: auto; */
mt-auto	/* margin-top: auto; */
mr-auto	/* margin-right: auto; */
mb-auto	/* margin-bottom: auto; */
ml-auto	/* margin-left: auto; */

/* Add horizontal margin */
<div class="mx-8 ...">mx-8</div>

/* Add vertical margin */
<div class="my-8 ...">my-8</div>

/* Add margin to all sides */
<div class="m-8 ...">m-8</div>

/* Using negative values */
<div class="-mt-8 bg-sky-300 ...">-mt-8</div>

/*Hover, focus, and other states */
<div class="mt-4 hover:mt-8"></div>
<div class="mx-8 hover:-mx-3 bg-sky-300">-mt-8</div>

/*Breakpoints and media queries*/
<div class="mt-1 md:mt-8">Breakpoints</div>
```



### Width

- https://tailwindcss.com/docs/width

  ```css
  w-0		width: 0px;
  w-px	width: 1px;
  w-0.5	width: 0.125rem; /* 2px */
  w-1		width: 0.25rem; /* 4px */
  w-1.5	width: 0.375rem; /* 6px */
  w-2		width: 0.5rem; /* 8px */
  w-2.5	width: 0.625rem; /* 10px */
  w-3		width: 0.75rem; /* 12px */
  w-3.5	width: 0.875rem; /* 14px */
  w-4		width: 1rem; /* 16px */
  w-5		width: 1.25rem; /* 20px */
  w-6		width: 1.5rem; /* 24px */
  w-7		width: 1.75rem; /* 28px */
  w-8		width: 2rem; /* 32px */
  w-9		width: 2.25rem; /* 36px */
  ...
  w-96	width: 24rem; /* 384px */
  w-auto	width: auto;
  /*Percentage widths*/
  w-1/2	width: 50%;
  w-1/3	width: 33.333333%;
  w-2/3	width: 66.666667%;
  w-1/4	width: 25%;
  w-2/4	width: 50%;
  w-3/4	width: 75%;
  w-1/5	width: 20%;
  w-2/5	width: 40%;
  w-3/5	width: 60%;
  w-4/5	width: 80%;
  w-1/6	width: 16.666667%;
  w-2/6	width: 33.333333%;
  w-3/6	width: 50%;
  w-4/6	width: 66.666667%;
  w-5/6	width: 83.333333%;
  w-1/12	width: 8.333333%;
  w-2/12	width: 16.666667%;
  w-3/12	width: 25%;
  w-4/12	width: 33.333333%;
  w-5/12	width: 41.666667%;
  w-6/12	width: 50%;
  w-7/12	width: 58.333333%;
  w-8/12	width: 66.666667%;
  w-9/12	width: 75%;
  w-10/12	width: 83.333333%;
  w-11/12	width: 91.666667%;
  
  w-full	width: 100%;
  w-screen	width: 100vw;
  w-min	width: min-content;
  w-max	width: max-content;
  w-fit	width: fit-content;
  
  /*Viewport width*/
  <div class="w-screen h-40 bg-pink-500">100 %</div>
  
  /*Hover, focus, and other states*/
  <div class="w-screen hover:w-40 h-40 bg-pink-500">width</div>
  
  /*Breakpoints and media queries*/
  <div class="w-1/2 md:w-full h-40 bg-slate-600">Breakpoints</div>
  
  /*Custom Widht*/
  <div class="w-[12rem] h-40 bg-slate-600">Custom Widht with rem</div>
  <div class="w-[200px]  h-40 bg-slate-600">Custom Widht with px</div>
  ```

  



### Height

- https://tailwindcss.com/docs/height

  ```css
  h-0		height: 0px;
  h-px	height: 1px;
  h-0.5	height: 0.125rem; /* 2px */
  h-1		height: 0.25rem; /* 4px */
  h-1.5	height: 0.375rem; /* 6px */
  h-2		height: 0.5rem; /* 8px */
  h-2.5	height: 0.625rem; /* 10px */
  h-3		height: 0.75rem; /* 12px */
  h-3.5	height: 0.875rem; /* 14px */
  h-4		height: 1rem; /* 16px */
  h-5		height: 1.25rem; /* 20px */
  .....
  h-96	height: 24rem; /* 384px */
  h-1/2	height: 50%;
  
  h-auto	height: auto;
  h-full	height: 100%;
  h-screen	height: 100vh;
  h-min	height: min-content;
  h-max	height: max-content;
  h-fit	height: fit-content;
  
  /*Full height*/
  <div class="h-48">
    <div class="h-full bg-blue-500">
      <!-- This element will have a height of `12rem` (h-48) -->
    </div>
  </div>
  
  /*Viewport height*/
  <div class="h-screen"></div>
  
  /*Hover, focus, and other states*/
  <div class="h-48">
  	<div class="h-28 hover:h-full bg-blue-500"></div>
  </div>
  
  /*Breakpoints and media queries*/
  <div class="h-48">
  	<div class="h-28 md:h-full bg-blue-500">Breakpoints</div>
  </div>
  
  /*Custom*/
  <div class="h-[32rem]"> Custom Height</div>
  <div class="h-[11px] bg-slate-200"> Custom Height</div>
  
  ```

  



### Border

- https://tailwindcss.com/docs/border-width#all-sides

  ```css
  0,1,2,8
  
  border-0	/* border-width: 0px; */
  border-2	/* border-width: 2px; */
  border-4	/* border-width: 4px; */
  border-8	/* border-width: 8px; */
  border		/* border-width: 1px; */
  
  /*x mean left and right */
  border-x-0	/* border-left-width: 0px;border-right-width: 0px;*/
  border-x-2	/* border-left-width: 2px;border-right-width: 2px; */
  border-x-4	/* border-left-width: 4px;border-right-width: 4px; */
  border-x-8	/* border-left-width: 8px;border-right-width: 8px; */
  border-x	/* border-left-width: 1px;border-right-width: 1px; */
  
  /*y mean top and bottom */
  border-y-0	/* border-top-width: 0px;border-bottom-width: 0px; */
  border-y-2	/* border-top-width: 2px;border-bottom-width: 2px; */
  border-y-4	/* border-top-width: 4px;border-bottom-width: 4px; */
  border-y-8	/* border-top-width: 8px;border-bottom-width: 8px; */
  border-y	/* border-top-width: 1px;border-bottom-width: 1px; */
  
  /* border-s-0 similar to border-left in bootstrap /*
  border-s-0	/* border-inline-start-width: 0px; */
  border-s-2	/* border-inline-start-width: 2px; */
  border-s-4	/* border-inline-start-width: 4px; */
  border-s-8	/* border-inline-start-width: 8px; */
  border-s	/* border-inline-start-width: 1px; */
  
  /* border-e-0 similar to border-right in bootstrap /*
  border-e-0	/* border-inline-end-width: 0px; */
  border-e-2	/* border-inline-end-width: 2px; */
  border-e-4	/* border-inline-end-width: 4px; */
  border-e-8	/* border-inline-end-width: 8px; */
  border-e	/* border-inline-end-width: 1px; */
  
  /* border-t-0 similar to border-top in bootstrap /*
  border-t-0	/* border-top-width: 0px; */
  border-t-2	/* border-top-width: 2px; */
  border-t-4	/* border-top-width: 4px; */
  border-t-8	/* border-top-width: 8px; */
  border-t	/* border-top-width: 1px; */
  
  /* border-r-0 similar to border-right in bootstrap /*
  border-r-0	/* border-right-width: 0px; */
  border-r-2	/* border-right-width: 2px; */
  border-r-4	/* border-right-width: 4px; */
  border-r-8	/* border-right-width: 8px; */
  border-r	/* border-right-width: 1px; */
  
  /* border-b-0 similar to border-bottom in bootstrap /*
  border-b-0	/* border-bottom-width: 0px; */
  border-b-2	/* border-bottom-width: 2px; */
  border-b-4	/* border-bottom-width: 4px; */
  border-b-8	/* border-bottom-width: 8px; */
  border-b	/* border-bottom-width: 1px; */
  
  /* border-l-0 similar to border-left in bootstrap /*
  border-l-0	/* border-left-width: 0px; */
  border-l-2	/* border-left-width: 2px; */
  border-l-4	/* border-left-width: 4px; */
  border-l-8	/* border-left-width: 8px; */
  border-l	/* border-left-width: 1px; */
  
  /* Horizontal and vertical sides */
  <div class="border-x-4 border-indigo-500 ..."></div>
  <div class="border-y-4 border-indigo-500 ..."></div>
  
  /* Hover, focus, and other states */
  <div class="border-t-2 hover:border-t-8 bg-slate-200">hover</div>
  <div class="border-x-2 md:border-x-8">Break point</div>
  ```

  



### Border Radius

- https://tailwindcss.com/docs/border-radius#basic-usage

  ```css
  rounded-none	/* border-radius: 0px; */
  rounded-sm		/* border-radius: 0.125rem; /* 2px */
  rounded			/* border-radius: 0.25rem; /* 4px */
  rounded-md		/* border-radius: 0.375rem; /* 6px */
  rounded-lg		/* border-radius: 0.5rem; /* 8px */
  rounded-xl		/* border-radius: 0.75rem; /* 12px */
  rounded-2xl		/* border-radius: 1rem; /* 16px */
  rounded-3xl		/* border-radius: 1.5rem; /* 24px */
  rounded-full	/* border-radius: 9999px; */
  ```

  



### Shadow

- https://tailwindcss.com/docs/box-shadow

  ```css
  shadow-sm		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  shadow			box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  shadow-md		box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  shadow-lg		box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  shadow-xl		box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  shadow-2xl		box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  shadow-inner	box-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);
  shadow-none		box-shadow: 0 0 #0000;
  
  /* Adding an outer shadow */
  <div class="shadow-md ..."></div>
  <div class="shadow-lg ..."></div>
  <div class="shadow-xl ..."></div>
  <div class="shadow-2xl ..."></div>
  
  /* Adding an inner shadow */
  <div class="shadow-inner ..."></div>
  
  /*Hover, focus, and other states*/
  <div class="shadow hover:shadow-lg"></div>
  
  /*Breakpoints and media queries*/
  <div class="shadow md:shadow-lg"></div>
  ```

  



### Box Shadow Color

- https://tailwindcss.com/docs/box-shadow-color

  ```css
  Class
  Properties
  shadow-inherit	--tw-shadow-color: inherit;
  shadow-current	--tw-shadow-color: currentColor;
  shadow-transparent	--tw-shadow-color: transparent;
  shadow-black	--tw-shadow-color: #000;
  shadow-white	--tw-shadow-color: #fff;
  shadow-slate-50
  shadow-slate-950
  shadow-gray-50
  
  /*By default colored shadows have an opacity of 100%, but you can adjust this using the opacity modifier. */
  <button class="bg-cyan-500 shadow-lg shadow-cyan-500/50 ...">Subscribe</button>
  <button class="bg-blue-500 shadow-lg shadow-blue-500/50 ...">Subscribe</button>
  <button class="bg-indigo-500 shadow-lg shadow-indigo-500/50 ...">Subscribe</button>
  
  /*Hover, focus, and other states*/
  <button class="shadow shadow-blue-500/40 hover:shadow-indigo-500/40"></button>
  
  /*Breakpoints and media queries*/
  <button class="shadow shadow-blue-500/40 md:shadow-indigo-500/40"></button>
  ```

  



### Font Weight

```css
font-thin		/* font-weight: 100; */
font-extralight	/* font-weight: 200; */
font-light		/* font-weight: 300; */
font-normal		/* font-weight: 400; */
font-medium		/* font-weight: 500; */
font-semibold	/* font-weight: 600; */
font-bold		/* font-weight: 700; */
font-extrabold	/* font-weight: 800; */
font-black		/* font-weight: 900; */

/* Hover, focus, and other states */
<p class="font-normal hover:font-bold"></p>

/*Breakpoints and media queries */
<p class="font-normal md:font-bold"></p>

/*Custom*/
<p class="font-[1100]"></p>
```





### Background Color

```css
bg-inherit	/* background-color: inherit; */
bg-current	/* background-color: currentColor; */
bg-transparent	/* background-color: transparent; */
bg-black	/* background-color: rgb(0 0 0); */
bg-white	/* background-color: rgb(255 255 255); */

/*slate,gray,zinc,neutral,stone,red,orange,amber,yellow,lime,green,emerald,teal,cyan,sky,blue,indigo,violet,purple,fuchsia,pink,rose*/
bg-slate-50 
bg-slate-100 
bg-slate-200 
bg-slate-900 
bg-slate-950 

/* Changing the opacity */
<button class="bg-sky-500/100 ..."></button>
<button class="bg-sky-500/75 ..."></button>
<button class="bg-sky-500/50 ..."></button>

/*Hover, focus, and other states*/
<button class="bg-pink-200 hover:bg-purple-400">Pink Color</button>

/*Breakpoints and media queries*/
<button class="bg-pink-200 md:bg-purple-400">Pink Color</button>

/*Custom BG*/
<p class="bg-[#50d71e]">Custom BG</p>
```





### Background  Gradient Image

```js
bg-none				/*background-image: none;*/
bg-gradient-to-t	/*background-image: linear-gradient(to top, var(--tw-gradient-stops));*/
bg-gradient-to-tr	/*background-image: linear-gradient(to top right, var(--tw-gradient-stops));*/
bg-gradient-to-r	/*background-image: linear-gradient(to right, var(--tw-gradient-stops));*/
bg-gradient-to-br	/*background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));*/
bg-gradient-to-b	/*background-image: linear-gradient(to bottom, var(--tw-gradient-stops));*/
bg-gradient-to-bl	/*background-image: linear-gradient(to bottom left, var(--tw-gradient-stops));*/
bg-gradient-to-l	/*background-image: linear-gradient(to left, var(--tw-gradient-stops));*/
bg-gradient-to-tl	/*background-image: linear-gradient(to top left, var(--tw-gradient-stops));*/

<div class="h-14 bg-gradient-to-r from-cyan-500 to-blue-500">Linear gradients To Rgiht (cyan to blue)</div>
<div class="h-14 bg-gradient-to-t from-sky-500 to-indigo-500">Linear gradients to Top (sky to indigo)</div>
<div class="h-14 bg-gradient-to-l from-violet-500 to-fuchsia-500">Linear gradients To left (voilet to fuchsia)</div>
<div class="h-14 bg-gradient-to-r from-purple-500 to-pink-500">Linear gradients to bottom left (purple to pink)</div>

/*Hover, focus, and other states*/
<div class="h-14 bg-purple-500 g-gradient-to-l  hover:bg-gradient-to-r from-purple-500 to-pink-500">Hover</div>

/*Breakpoints and media queries*/
<div class="h-14 bg-purple-500 bg-gradient-to-l md:bg-gradient-to-r from-purple-500 to-pink-500">
    Breakpoints
</div>
```





### Gradient Color Stops

```css
/*Starting color*/
<div class="bg-gradient-to-r from-indigo-500 h-24">Gradient only sart color</div>

/*Ending color*/
<div class="bg-gradient-to-r from-cyan-500 to-blue-500 h-24.">Gradient only end color</div>

/*Middle color*/
<div class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-24">Middle color</div>

/*Specifying stop positions*/
<div class="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% h-24">
Specifying stop positions</div>

/*Hover, focus, and other states*/
<button type="button" class="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">
  Hover me
</button>

/*Breakpoints and media queries*/
<div class="bg-gradient-to-r from-purple-400 md:from-yellow-500 h-24"></div

/*customizing*/
<div class="from-[#243c5a]"></div>
```





### Flex

```css
flex 
- justify-end
- justify-center
- justify-between
- justify-around
- justify-evenly    
```





### Position 





### Display





### @apply Directive



### Icons



### Transition





### Daisy UI Component







### Mis

```css
overflow-hidden
object-cover
tracking-wider
cursor-pointer
text-right
md:hidden
```



