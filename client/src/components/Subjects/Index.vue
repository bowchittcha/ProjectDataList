<template>
  <center>
    <div>
      <h1>Get All Subjects</h1>
      <h2>จำนวนรายวิชา {{ subjects.length }}</h2>
      <p>
        <button class="b-button" v-on:click="navigateTo('/subject/create')">create subject</button>
      </p>
      <div v-for="subject in subjects" v-bind:key="subject.id">
        <div>รหัสวิชา: {{ subject.subjectId }}</div>
        <div>ชื่อรายวิชาภาษาอังกฤษ: {{ subject.subjectEngName }}</div>
        <div>ชื่อรายวิชาภาษาไทย: {{ subject.subjectThaiName }}</div>
        <div>ปีการศึกษา: {{ subject.yearOpen }}</div>
        <div>อาจารย์ผู้สอน: {{ subject.professor }}</div>
        <p>
          <button class="b-button" v-on:click="navigateTo('/subject/' + subject.id)">subject information</button>
          <button class="b-button" @click="navigateTo('/subject/edit/' + subject.id)">edit subject</button>
          <button class="b-button" @click="deleteSubject(subject)">delete</button>
        </p>
        <hr>
      </div>
    </div>
  </center>
</template>

<script>
import SubjectsService from "@/services/SubjectsService";

export default {
  data() {
    return {
      subjects: [],
    };
  },
  async created() {
    try {
      this.subjects = (await SubjectsService.index()).data;
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route)
    },
    async deleteSubject(subject) {
      let result = confirm("Want of delete?")
      if (result) {
        try {
          await SubjectsService.delete(subject)
          this.refreshData();
        } catch (err) {
          console.log(err);
        }
      }
    },
    async refreshData() {
      this.subjects = (await SubjectsService.index()).data;
    }
  },
};
</script>

<style scoped>
.error {
  color: red;
}

.b-button {
  background-color: #444644;
  color: white;
  padding: 8px 13px;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  text-decoration: none;
}
</style>