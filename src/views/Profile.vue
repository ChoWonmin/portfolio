<template lang="pug">
  .profile
    .basic-info
      .profile-img-warp
        .profile-img
      v-divider.my-2
      .info-row
        .info-name 이름
        .info-value 조원민
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
      v-divider.my-2
      .info-subtitle 학력사항
      .info-row
        .info-name 2013.03 - 2019.07
        .info-value 아주대학교 미디어학과
      v-divider.my-2
      .info-subtitle 경력사항
      .info-row
        .info-name 2019.07 - 현재
        .info-value ncsoft, Data Center
      v-divider.my-2
      .info-subtitle 기술
      .info-bar-warp
        .info-bar-col(v-for="(skill, index) in skillList")
          .info-bar-outer
            .info-bar-inner
          .info-bar-name {{skill.name}}
      v-divider.my-2
</template>

<script>
export default {
  name: 'profile',
  data: () => ({
    skillList: [
      { name: '개발', score: 90 },
      { name: '분석', score: 50 },
      { name: '시각화', score: 90 },
      { name: 'ETL', score: 70 },
    ],
  }),
};
</script>

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
    .profile-img-warp
      display: flex
      justify-content: center
      .profile-img
        width: 200px
        height: 200px
        background-color: #dfdfdf
        border-radius: 100%
    .info-row
      display: flex
      padding: 4px
      font-size: 12px
      .info-name
        flex: 1
        font-weight: bold
      .info-value
        flex: 2
    .info-bar-warp
      display: flex
      padding: 4px
      width: 100%
      height: 80px
      .info-bar-col
        width: 40px
        height: 100%
        display: flex
        flex-direction: column
        justify-content: center
        .info-bar-outer
          width: 14px
          height: 60px
          margin: 0 13px
          background-color: #B7C2D3
          position: relative
          .info-bar-inner
            width: 100%
            height: 80%
            background-color: #163167
            position: absolute
            bottom: 0
        .info-bar-name
          height: 20px
          font-size: 12px
          text-align: center
</style>
