<template lang="pug">
  .profile
    .basic-info
      .profile-img
      .text-h6 조원민
      v-divider
      .info-row
        .info-name 나이(성별)
        .info-value 28(남)
      .info-row
        .info-name 생년월일
        .info-value 1994.06.03
      .info-row
        .info-name 이메일
        .info-value 0108257@gmail.com
      .info-row
        .info-name Github
        .info-value github.com/ChoWonmin

</template>

<style lang="sass" scoped>
.profile
  width: 100%
  height: 100%
  display: flex
  .basic-info
    width: 320px
    height: 100%
    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12) !important
    padding: 16px
    color: #163167
    .profile-img
      width: 200px
      height: 200px
      background-color: #dfdfdf
      border-radius: 100%
    .info-row
      display: flex
      padding: 4px
      .info-name
        flex: 1
        font-weight: bold
      .info-value
        flex: 2
</style>
