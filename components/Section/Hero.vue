<script setup lang="ts"></script>

<template>
  <div>
    <section class="text-gray-400 body-font bg-Section-Color" id="hero-section">
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            alt="hero"
            class="object-cover object-center rounded"
            src="/images/hero/Maskgroup.webp"
          />

          <!--          <img
            alt="hero"
            class="object-cover object-center rounded"
            :src="require(`~/public/images/hero/Maskgroup.webp`)"
          /> -->
        </div>
        <div
          class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-right mb-16 md:mb-0 items-center"
        >
          <h1
            class="title-font sm:text-4xl text-5xl mb-4 font-bold text-black font-MyFont"
          >
            كل طفل يولد عبقريا
          </h1>
          <p class="mb-3 leading-relaxed font-MyFont text-gray-800 font-medium text-lg">
            دع إديوتك يساعد طفلك على تعزيز هذه الأمور
          </p>

          <p class="mb-8 leading-relaxed font-MyFont text-gray-800 font-medium text-lg">
            نحن نقدم دروسًا مخصصة مدعومة بالذكاء الاصطناعي، تستهدف الأطفال الذين تتراوح
            أعمارهم بين 3 و12 عامًا. من خلال نهجنا متعدد المناهج، نضمن حصول طفلك على
            الأفضل.
          </p>
          <div class="flex">
            <button class="rounded-lg bg-black font-MyFont pa-5">
              <span
                class="w-60 block -translate-x-2 -translate-y-2 rounded-lg border-2 border-black bg-yellow-500 text-black p-4 text-2xl hover:-translate-y-3 active:translate-x-0 active:translate-y-0 transition-all"
              >
                استكشاف الدورات
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!--   <section class="hero">
      <div class="grid grid-cols-5 gap-4">
        <div class="card bg-rose-200 rounded-3xl border border-black">
          <div class="card-body p-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              class="mb-4 h-12 w-12 text-pink-500 card-img-top"
            >
              <path
                fill-rule="evenodd"
                d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
                clip-rule="evenodd"
              ></path>
              <path
                d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z"
              ></path>
            </svg>

            <h5 class="card-title text-black text-2xl font-semibold font-MyFont">
              فصول مخصصة
            </h5>
            <p class="card-text font-MyFont font-medium mt-4">
              تبدأ الشركات الناشئة عادة من قبل مؤسس (مؤسس منفرد) أو مؤسسين مشاركين لديهم
              طريقة لحل مشكلة ما.
            </p>
          </div>
        </div>
        <div class="card bg-rose-200 rounded-3xl border border-black">
          <div class="card-body p-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              class="mb-4 h-12 w-12 text-pink-500 card-img-top"
            >
              <path
                fill-rule="evenodd"
                d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
                clip-rule="evenodd"
              ></path>
              <path
                d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z"
              ></path>
            </svg>

            <h5 class="card-title text-black text-2xl font-semibold font-MyFont">
              فصول مخصصة
            </h5>
            <p class="card-text font-MyFont font-medium mt-4">
              تبدأ الشركات الناشئة عادة من قبل مؤسس (مؤسس منفرد) أو مؤسسين مشاركين لديهم
              طريقة لحل مشكلة ما.
            </p>
          </div>
        </div>
        <div class="card bg-rose-200 rounded-3xl border border-black">
          <div class="card-body p-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              class="mb-4 h-12 w-12 text-pink-500 card-img-top"
            >
              <path
                fill-rule="evenodd"
                d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
                clip-rule="evenodd"
              ></path>
              <path
                d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z"
              ></path>
            </svg>

            <h5 class="card-title text-black text-2xl font-semibold font-MyFont">
              فصول مخصصة
            </h5>
            <p class="card-text font-MyFont font-medium mt-4">
              تبدأ الشركات الناشئة عادة من قبل مؤسس (مؤسس منفرد) أو مؤسسين مشاركين لديهم
              طريقة لحل مشكلة ما.
            </p>
          </div>
        </div>
        <div class="card bg-rose-200 rounded-3xl border border-black">
          <div class="card-body p-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              class="mb-4 h-12 w-12 text-pink-500 card-img-top"
            >
              <path
                fill-rule="evenodd"
                d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
                clip-rule="evenodd"
              ></path>
              <path
                d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z"
              ></path>
            </svg>

            <h5 class="card-title text-black text-2xl font-semibold font-MyFont">
              فصول مخصصة
            </h5>
            <p class="card-text font-MyFont font-medium mt-4">
              تبدأ الشركات الناشئة عادة من قبل مؤسس (مؤسس منفرد) أو مؤسسين مشاركين لديهم
              طريقة لحل مشكلة ما.
            </p>
          </div>
        </div>
        <div class="card bg-rose-200 rounded-3xl border border-black">
          <div class="card-body p-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              class="mb-4 h-12 w-12 text-pink-500 card-img-top"
            >
              <path
                fill-rule="evenodd"
                d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
                clip-rule="evenodd"
              ></path>
              <path
                d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z"
              ></path>
            </svg>

            <h5 class="card-title text-black text-2xl font-semibold font-MyFont">
              فصول مخصصة
            </h5>
            <p class="card-text font-MyFont font-medium mt-4">
              تبدأ الشركات الناشئة عادة من قبل مؤسس (مؤسس منفرد) أو مؤسسين مشاركين لديهم
              طريقة لحل مشكلة ما.
            </p>
          </div>
        </div>
      </div>
    </section> -->
  </div>
</template>

<style>
#hero {
  background: #000;
}
</style>
