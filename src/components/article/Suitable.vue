<template>
<Navbar></Navbar>
<div class="container">
    <div class="row">
        <div class="rol-4 text-center">
            <h4 class="card-title mt-4 ttitle">養貓前你一定要知道</h4>
            <h4 class="tttitle mt-4">你適合養貓嗎？貓奴的自我評估</h4>

        </div>
<p class="mt-4 w-75">
想成為一位貓奴並不是一件容易的事，你先要好好瞭解每一個養貓時需顧慮到的問題才好決定應否養貓！當任何動物走進你的生活世界內，那就正正是時候讓你成為一個負責任的主人。想知自己是否適合成為一位貓主人，以下6個重大養貓前的自我評估問題你必須要知！
</p>

<h4 class="mt-4 w-75 m-auto">1. 願意花時間和心機</h4>
<p class="mt-4 w-75">
喵星人個性雖然很獨立，不像狗狗要花時間和牠們散步，但你每天也得為貓咪梳理牠們的毛髮和清潔貓沙。雖說貓咪天生聰明，但有一些壞習慣牠們都改不了，所以你要有心理準備需要花點時間好好訓練牠們。
</p>

<h4 class="mt-4 w-75 m-auto">2. 經濟能力許可</h4>
<p class="mt-4 w-75">
動物和人類一樣都會有生病的時候，但動物的醫藥費用並不是一個小數目，所以當你選擇成為貓奴時，就要知道個人的經濟能力是否能應付，因為貓咪需要在一個良好的健康環境下生活。
</p>

<h4 class="mt-4 w-75 m-auto">3. 合適的居住環境</h4>
<p class="mt-4 w-75">
現今香港有好多居住地方不容許飼養小動物，所以要清楚知道你家的居住條件才好決定帶動物回家。不然被人發現的時候，貓咪很可能會成為遺棄的動物！
</p>

<h4 class="mt-4 w-75 m-auto">4. 選擇適合你的貓咪</h4>
<p class="mt-4 w-75">
你要考慮清楚哪一種貓品種最適合你，例如要考慮飼養雌性貓還是雄性貓、成貓還是幼貓等，因為有些品種很容易有遺傳病，而長毛貓就要每天為牠們梳理毛髮。所以貓品種都是你要考慮的重要條件之一。
</p>

<h4 class="mt-4 w-75 m-auto">5. 得到家中所有成員的同意</h4>
<p class="mt-4 w-75">
因為有很多人都會對貓毛和牠們口水過敏，而導致他們發病，要看醫生處理。如果家人會因此而反對你飼養貓咪，那麼你應打消這個念頭。在你決定之前，應該得到家中各成員的認同才好接貓咪回家！不然你就要送走貓咪因而導致牠們成為遺棄動物，這樣會很影響貓貓的心理狀態！
</p>

<h4 class="mt-4 w-75 m-auto">6. 能忍受貓咪的破壞力</h4>
<p class="mt-4 w-75">
貓和狗都是破壞狂，牠們很喜歡咬膠袋、紙張、椅子、抓門或是咬爛沙發等。你可以訓練牠們，讓牠們知道這樣做是不對的，但需要花很多力氣和時間去訓練，不然牠們會把你家倒轉！
</p>

<p class="mt-4 w-75">
飼養寵物不是玩玩而已，而是要對一條生命負責任，一旦飼養牠們就不應遺棄牠！所以，在決定飼養貓咪前你應好好考慮清楚以上的問題，反覆地評估一下你究竟是否適合成為一個稱職的貓奴！
</p>
        

    </div>
</div>
<Footer class="mt-4"></Footer>
</template>

<script>
import Navbar from "../HomeNavbar.vue";
import Footer from "../HomeFooter.vue";
export default {
    components: {
        Navbar,
        Footer,

  },
  data() {
    return {
    };
  },

}
</script>

<style>
.ttitle{
    color: #fff;
    background-color: #F59246;
    border-radius: 14px;
    width: 18rem;
    margin: auto;
    padding: 0.1rem;
}
.tttitle{
  color: #F59246;
  text-decoration: none;
}
p{
    text-indent:1em;/* 首行文本內容之前的縮進量 */
    margin: auto;
    text-align: justify;/* 左右對齊 */
    text-justify: auto;/* IE需再加上此行才左右對齊 */
    
}
</style>