<template lang="pug">
.profile
  v-dialog(width="724px" v-show="isSmall" v-model="dialog")
    .content-show-warpper.dialog
      .content-header(v-if="selectedProject.github !== undefined")
        v-btn(
          samll,
          color="#163167",
          @click="openWindow(selectedProject.github)"
        )
          span.mr-2.white--text github
          v-icon.white--text mdi-github
      iframe.content-show(
        v-if="selectedProject.url !== undefined",
        frameborder="0",
        :src="selectedProject.url"
      )
      .content-show(v-if="selectedProject.url === undefined", ref="content")
        .content-show-row(v-for="(row, i) in imagesLinks(selectedProject.image)")
          .img-warp
            v-img(
              :src="require(`../assets/images/${row.src}`)",
              :lazy-src="require(`../assets/images-lazy/${row.lazy}`)",
              width="100%",
              contain
            )

  .basic-info
    .profile-img-container
      .profile-img-warp
        v-img.profile-image(:src="require('../assets/wonmin.jpeg')")
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
      .info-bar-col(v-for="(skill, index) in skillList", :key="index")
        .info-bar-outer
          .info-bar-inner(:style="{ height: `${skill.score}%` }")
        .info-bar-name {{ skill.name }}
    v-divider.my-2
    .info-subtitle 언어/프레임워크
    .info-bar-warp
      .info-bar-col(v-for="(framework, index) in frameworks", :key="index")
        .info-bar-outer
          .info-bar-inner(:style="{ height: `${framework.score}%` }")
        .info-bar-name {{ framework.name }}
    v-divider.my-2

  .project-list-warpper
    .project-search
      v-text-field(
        solo,
        placeholder="프로젝트를 검색하세요.",
        dense,
        v-model="searchWord"
      )
      .info-bold.pb-2 카테고리를 활성화하세요.
      .pallete-warpper
        .pallete-ele(
          v-for="(category, categoryKey) in categoryMap",
          :key="categoryKey",
          :attr-content="category.name"
        )
          v-btn.mx-1(
            x-small,
            @click="changePallete(categoryKey)",
            :color="category.active ? category.color : 'grey'"
          ) {{ category.name }}

    v-divider.my-2
    .project-list
      .project-card(
        v-for="(project, index) in searchProjectByWord(searchWord)",
        :key="index",
        v-if="categoryMap[project.category].active",
        :class="{ clickable: project.clickable, active: project.active }",
        @click="selectProject(project, index)"
      )
        .project-card-header
          .project-title-warpper
            .info-title {{ project.name }}
            .info-period {{ `${project.period[0]} - ${project.period[1]}` }}
          v-btn(
            :color="categoryMap[project.category].color",
            :style="{ 'pointer-events': 'none' }",
            x-small
          ) {{ categoryMap[project.category].name.toUpperCase() }}
        v-divider.my-2
        .purpose-content
          .info-bold 목적
          .purpose-row.pl-1(
            v-for="(purpose, index) in project.purposes",
            :key="index"
          ) {{ `- ${purpose}` }}
        v-divider.my-2
        .descript-content(v-if="project.descripts.length > 0")
          .info-bold 설명
          .descript-row.pl-1(
            v-for="(descript, index) in project.descripts",
            :key="index"
          ) {{ `- ${descript}` }}

  .content-show-warpper(v-show="!isSmall")
    .content-header(v-if="selectedProject.github !== undefined")
      v-btn(
        samll,
        color="#163167",
        @click="openWindow(selectedProject.github)"
      )
        span.mr-2.white--text github
        v-icon.white--text mdi-github
    iframe.content-show(
      v-if="selectedProject.url !== undefined",
      frameborder="0",
      :src="selectedProject.url"
    )
    .content-show(v-if="selectedProject.url === undefined", ref="content")
      .content-show-row(v-for="(row, i) in imagesLinks(selectedProject.image)")
        .img-warp
          v-img(
            :src="require(`../assets/images/${row.src}`)",
            :lazy-src="require(`../assets/images-lazy/${row.lazy}`)",
            width="100%",
            contain
          )
</template>

<script>
import ProjectShower from '@/components/ProjectShower';
import projectList from './projectList';

export default {
  name: 'profile',
  components: {
    'project-shower': ProjectShower,
  },
  data: () => ({
    isSmall: false,
    dialog: false,
    searchWord: '',
    selectedProject: {
      url: undefined,
      github: undefined,
      image: {
        len: 0,
        directory: '',
      },
    },
    categoryMap: {
      vis: {
        name: 'Visualization',
        color: '#ffb6b9',
        icon: 'chart-line',
        active: true,
      },
      service: {
        name: 'Service',
        color: '#bbded6',
        icon: 'television-ambient-light',
        active: true,
      },
      graphics: {
        name: 'Graphics',
        color: '#8ac6d1',
        icon: 'vector-triangle',
        active: true,
      },
      oss: {
        name: 'Open Source',
        color: '#fae3d9',
        icon: 'open-source-initiative',
        active: true,
      },
    },
    skillList: [
      { name: '개발', score: 90 },
      { name: '분석', score: 50 },
      { name: '시각화', score: 90 },
      { name: 'ETL', score: 70 },
    ],
    frameworks: [
      { name: 'Spark', score: 70 },
      { name: 'Hadoop', score: 70 },
      { name: 'js', score: 95 },
      { name: 'Java', score: 75 },
      { name: 'Graphics', score: 65 },
    ],
    projectList,
  }),
  beforeDestroy() {
    if (typeof window === 'undefined') return;

    window.removeEventListener('resize', this.onResize, { passive: true });
  },
  mounted() {
    this.onResize();
    window.addEventListener('resize', this.onResize, { passive: true });

    this.projectList[0].active = true;
    this.selectedProject = this.projectList[0];
  },
  methods: {
    onResize() {
      this.isSmall = window.innerWidth < 1220;
    },
    openWindow(link) {
      window.open(link);
    },
    changePallete(categoryKey) {
      this.categoryMap[categoryKey].active = !this.categoryMap[categoryKey].active;
    },
    searchProjectByWord(word) {
      return this.projectList.filter((ele) => {
        if (ele.name.includes(word)) {
          return true;
        }

        if (ele.purposes.filter((purpose) => purpose.includes(word)).length > 0) {
          return true;
        }

        if (ele.descripts.filter((descript) => descript.includes(word)).length > 0) {
          return true;
        }
        return false;
      });
    },
    selectProject(project) {
      if (project.clickable) {
        this.projectList.forEach((ele) => (ele.active = false));

        this.selectedProject = project;
        if (this.isSmall) {
          this.dialog = true;
        }

        this.projectList.filter((ele) => ele.name === this.selectedProject.name)[0].active = true;

        this.$nextTick(() => {
          if (this.$refs.content) {
            this.$refs.content.scrollTop = 0;
          }
        });
      }
    },
    imagesLinks: (image) => {
      const links = new Array(image.len).fill(0).map(
        (ele, i) => {
          const number00format = (i + 1).toLocaleString(
            'en-US',
            { minimumIntegerDigits: 2, useGrouping: false },
          );

          const ext = image.ext === undefined ? 'png' : image.ext;

          return {
            src: `${image.directory}/${image.directory}0${number00format}.${ext}`,
            lazy: `${image.directory}/${image.directory}.0${number00format}.jpeg`,
          };
        },

      );
      return links;
    }
    ,
  },
};
</script>

<style lang="sass" scoped>
@mixin shadow
  box-shadow: 0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12) !important

@mixin scrollbar
  &::-webkit-scrollbar
    width: 4px
  &::-webkit-scrollbar-thumb
    background: #E0E0E0
    border-radius: 10px
  &::-webkit-scrollbar-thumb:hover
    background: #BDBDBD

*
  color: #163167
  font-size: 12px

.info-title
  font-size: 12px
  font-weight: bold

.info-subtitle
  font-size: 14px

.info-bold
  font-weight: bold

.profile
  width: 100%
  height: 100%
  display: flex
  @media only screen and (max-width: 724px)
    flex-wrap: wrap
    width: 100wh
  .basic-info
    width: 280px
    height: 100%
    @include shadow
    @include scrollbar
    padding: 16px
    overflow-y: auto
    @media only screen and (max-width: 724px)
      width: 100%
      height: auto
      overflow-y: visible
    .profile-img-container
      display: flex
      justify-content: center
      .profile-img-warp
        width: 120px
        height: 120px
        background-color: #dfdfdf
        border-radius: 100%
        @include shadow
        .profile-image
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
      height: 72px
      .info-bar-col
        width: 50px
        height: 100%
        display: flex
        flex-direction: column
        justify-content: center
        .info-bar-outer
          width: 14px
          height: 60px
          margin: 0 18px
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
  .project-list-warpper
    width: 440px
    height: 100%
    @include shadow
    padding: 16px
    @media only screen and (max-width: 1220px)
      flex: 1
    @media only screen and (max-width: 730px)
      width: 100%
      height: 100vh
    .project-search
      .pallete-warpper
        display: flex

    .project-list
      height: calc(100% - 142px)
      overflow-y: auto
      padding: 2px
      @include scrollbar
      .project-card
        @include shadow
        width: 100%
        // height: 120px
        margin-top: 16px
        padding: 8px
        background-color: rgba(0, 0, 0, 0.12)
        &.clickable
          background-color: #ffffff
          cursor: pointer
        &.clickable.active
          transition: all ease 0.5s
          background-color: lighten(#163167, 65%)
        &.clickable:hover
          background-color: lighten(#163167, 72%)
        .project-card-header
          height: 36px
          display: flex
          .project-title-warpper
            flex: 1

.content-show-warpper
  min-height: 660px
  flex: 1
  position: relative
  background-color: #fefefe
  &.dialog
    width: 100%
    height: 648px
  .content-header
    position: absolute
    top: 16px
    right: 16px
    z-index: 1
  .content-show
    width: 100%
    height: 100%
    overflow-y: auto
    padding: 4px
    @include scrollbar
    .content-show-row
      display: flex
      justify-content: center
      .img-warp
        @include shadow
        border-bottom: 1px solid rgba(0, 0, 0, 0.12)
        width: 1000px
        @media only screen and (max-width: 1800px)
          width: 760px
        @media only screen and (max-width: 1580px)
          width: 700px
        @media only screen and (max-width: 1440px)
          width: 560px
        @media only screen and (max-width: 1280px)
          width: 480px
        @media only screen and (max-width: 1220px)
          width: 720px
        @media only screen and (max-width: 724px)
          width: 320px
</style>
