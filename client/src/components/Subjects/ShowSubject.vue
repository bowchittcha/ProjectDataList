<template>
  <div>
    <h1>Get Subject By Id</h1>
    <p>รหัสวิชา: {{ subject.subjectId }}</p>
    <p>ชื่อรายวิชาภาษาอังกฤษ: {{ subject.subjectEngName }}</p>
    <p>ชื่อรายวิชาภาษาไทย: {{ subject.subjectThaiName }}</p>
    <p>สังกัด: {{ subject.affiliation }}</p>
    <p>หน่วยกิต: {{ subject.credit }}</p>
    <p>ประเภทของรายวิชา: {{ subject.subjectType }}</p>
    <p>จำนวนคนที่รับ: {{ subject.numberOfpeople }}</p>
    <p>ปีการศึกษา: {{ subject.yearOpen }}</p>
    <p>อาจารย์ผู้สอน: {{ subject.professor }}</p>
    <button @click="navigateTo('/subjects')">back</button>
  </div>
</template>

<script>
import SubjectsService from "@/services/SubjectsService";

export default {
  data() {
    return {
      subject: "",
    };
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    }
  },
  async created() {
    try {
      let subjectId = this.$route.params.subjectId;
      this.subject = (await SubjectsService.show(subjectId)).data;
    } catch (err) {
      console.log(err);
    }
  },
};
</script>

<style></style>