<script setup>
import React from './components/React.vue';
import PropComputed from './components/PropComputed.vue';
import Logger from './components/Logger.vue';
import Message from './components/Message.vue';
import Binder from './components/Binder.vue';
import Carrousel from './components/Carrousel.vue';
import FeuTricolore from './components/FeuTricolore.vue';
import ListePersonnes from './components/ListePersonnes.vue';
import MyForm from './components/MyForm.vue';
import Listener from './components/Listener.vue';
import Parent from './components/parent_child/Parent.vue';
import Article from './components/Article.vue';
import TicTac from './components/TicTac.vue';
import GrandFather from './components/provide_inject/GrandFather.vue';
import Blink from './components/Blink.vue';
import AnimatedText from './components/AnimatedText.vue';
import PageApp from './components/nav/PageApp.vue';

import { ref } from 'vue';

const isVisible = ref(false)
const playPauseTicTac = () => {
  isVisible.value = !isVisible.value;
}
</script>

<template>
  <!-- <React /> -->

  <!-- <PropComputed /> -->

  <!-- <Logger /> -->

   <!-- <Message label="Message normal" level="normal" />
   <Message label="Message informatif" level="warning" />
   <Message label="Message d'erreur" level="error" /> -->

  <!-- <Binder /> -->

  <!-- <Carrousel /> -->

  <!-- <FeuTricolore /> -->

  <!-- <ListePersonnes /> -->

  <!-- <MyForm /> -->

  <!-- <Listener /> -->

  <!-- <Parent /> -->

  <!-- <Article>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Ratione commodi labore eligendi consequatur excepturi dolore amet, 
    facere quisquam velit porro accusamus sint asperiores minus, 
    nobis tempore quasi, non dolores quia.
    <template v-slot:titreArticle>Un ptit texte en latin</template>
    <template v-slot:auteurArticle>Nicolas Beuglet</template>
  </Article>
  <Article>
    Petit texte d'exemple pour définir un nouvel article
    <template v-slot:titreArticle>Le titre</template>
    <template v-slot:auteurArticle>Alex</template>
  </Article>
  <Article>
    Texte d'un anonyme
    <template v-slot:titreArticle>Anonyme</template>
  </Article> -->

  <!-- <button @click="playPauseTicTac">{{ (isVisible) ? 'PAUSE' : 'PLAY' }}</button>
  <TicTac v-if="isVisible"/> -->

  <!-- <GrandFather /> -->

  <!-- <Blink>⚠️ ALERT ⚠️</Blink> -->

  <!-- <AnimatedText /> -->

  <PageApp />
</template>
