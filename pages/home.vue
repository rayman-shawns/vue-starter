<template>
  <main class="flex w-full flex-col h-screen bg-primary-lighter">
    <sun-header />
    <!-- top -->
    <section class="flex-1 overflow-y-auto px-[20px]">
      <article class="flex flex-wrap bg-slate-200">
        <!-- frist one -->
        <div class="w-1/2">
          <h1>
            <strong>UP To</strong>
            <span>$2,600,000</span>
          </h1>
          <h2>SINGN UP & GET REwARD</h2>
          <h3>or <van-icon name="chat-o" /></h3>
          <button>Sign Up Now</button>
        </div>
        <!-- second one -->
        <div class="w-1/2 p-1">
          <img src="@/assets/imgs/demo.jpg" alt="" class="h-[211px] w-full" />
        </div>
        <!-- third one -->
        <div class="w-1/2 p-1">
          <h1><van-icon name="chat-0" />CaSINO</h1>
          <div>
            <img src="@/assets/imgs/demo.jpg" alt="" class="h-[211px] w-full" />
            <p>Dive into our wide range of in-house games,live casuno and slots to experience a thrilling casino adventure</p>
          </div>
          <button>Description</button>
        </div>
        <!-- last one-->
        <div class="w-1/2 p-1">
          <h1><van-icon name="chat-0" />Buy Crypto</h1>
          <img src="@/assets/imgs/demo.jpg" alt="" class="h-[211px] w-full" />
          <p>Fast & Easy Way to get started</p>
          <p><span>300%</span> Deposit Bonus</p>
          <button>Deposit</button>
        </div>
      </article>
      <!-- table -->
      <section class="mt-4">
        <h1>Latest bet & Race</h1>
        <div class="bg-slate-800">
          <div class="flex">
            <p class="w-[164px] h-[56px] flex justify-center items-center bg-slate-500">Latest bets</p>
            <p class="w-[164px] h-[56px] flex justify-center items-center bg-slate-600">High rollers</p>
          </div>
          <table class="w-full border text-center text-white">
            <thead>
              <tr class="py-2">
                <th class="py-4">Game</th>
                <th>Player</th>
                <th>Bet Amount</th>
                <th>Multiplier</th>
                <th>Profit Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in 10" :key="item">
                <td class="py-4">
                  <van-icon name="chat-o" />
                  BEgypti…
                </td>
                <td>Edison Lim</td>
                <td>￥0.00<van-icon name="chat-o" /></td>
                <td>1.00x</td>
                <td>+<van-icon name="chat-o" /> BEgypti…</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <!-- text -->
      <article class="bg-gray-500 mt-5">
        <h2>Crpto Online Casino</h2>
        <p>
          Casinos online have not always been around, but we can safely came on the market. And it’s not in short demand nor options, and
          now in 2023, we have 1000s and 1000s to pick from - it’s just a matter of what you like and what payment options you would like to
          see at the casino.
        </p>
        <p>
          Players are always looking for something new, which will help make the gaming experience so much berrer and more accessible.
          Allowing the player to focus on the absolute fun of a casino, that’s right, the games themselves.
        </p>
        <p>show more >></p>
      </article>
      <!-- list -->
      <section class="mt-5 bg-slate-50">
        <h2>Accepted Networks</h2>
        <ul class="flex flex-wrap justify-center">
          <li v-for="item in 10" :key="item" class="mx-2 my-5">
            <img src="@/assets/imgs/demo.jpg" alt="" class="w-[100px] h=[50px]" />
          </li>
        </ul>
      </section>
      <!-- copyright-->
      <article class="mt-5 pb-10">
        <img src="@/assets/imgs/demo.jpg" alt="" class="h-[40px] w-[100px] mx-auto" />
        <p class="flex justify-center">© 2023 SUN.GAME.com 版权所有</p>
        <p class="flex justify-center">1 BTC = US$28,384.90</p>
        <p>
          A multi-award winning crypto casino.With a player-centric approach.SUN.GAME is able to satisfy millions of gamblers across the
          globe.SUN.GAME has its priority set on itscommunity,ensuring an everlasting and endlessly entertaining gambling experience.
        </p>
        <p>
          SUN.GAME is operated by BlockDance B.V.(Commercial refister of Curacao no.158482，Emancipatie Boulevard Dominico
          F.”Don”Martina31,Curacao)under a sublicense CIL pursuant to Master gaming License #5536/JAZ.
        </p>
      </article>
    </section>
  </main>
</template>

<script lang="ts" setup>
import SunHeader from '@/components/sun-header/index.vue'
</script>
