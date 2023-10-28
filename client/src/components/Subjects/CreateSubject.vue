<template>
  <div>
      <h1>Create Subject</h1>
      <form v-on:submit.prevent="createSubject">
        <p>รหัสวิชา: <input type="text" v-model="subject.subjectId" /></p>
        <p>ชื่อรายวิชาภาษาอังกฤษ: <input type="text" v-model="subject.subjectEngName" /></p>
        <p>ชื่อรายวิชาภาษาไทย: <input type="text" v-model="subject.subjectThaiName" /></p>
        <p>สังกัด: <input type="text" v-model="subject.affiliation" /></p>
        <p>หน่วยกิต: <input type="text" v-model="subject.credit" /></p>
        <p>ประเภทของรายวิชา: <input type="text" v-model="subject.subjectType" /></p>
        <p>จำนวนคนที่รับ: <input type="text" v-model="subject.numberOfpeople" /></p>
        <p>ปีการศึกษา: <input type="text" v-model="subject.yearOpen" /></p>
        <p>อาจารย์ผู้สอน: <input type="text" v-model="subject.professor" /></p>
        <p><button type="submit">create</button></p>
      </form>
  </div>
</template>

<script>
import SubjectsService from "@/services/SubjectsService";

export default {
  data() {
    return {
      subject: {
        subjectId: "",
        subjectEngName: "",
        subjectThaiName: "",
        affiliation: "",
        credit: "",
        subjectType: "",
        numberOfpeople: "",
        yearOpen: "",
        professor: ""
      },
    };
  },
  methods: {
    async createSubject() {
      try {
        await SubjectsService.post(this.subject)
        this.$router.push("/subjects");
      } catch (err) {
        console.log(err)
      }
    }
  }
};
</script>

<style></style>