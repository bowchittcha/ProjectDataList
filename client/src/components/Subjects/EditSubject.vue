<template>
  <center>
    <div>
      <div>
        <h1>Edit Subject</h1>
        <form v-on:submit.prevent="editSubject">
          <p>รหัสวิชา: <input type="text" v-model="subject.subjectId" /></p>
          <p>ชื่อรายวิชาภาษาอังกฤษ: <input type="text" v-model="subject.subjectEngName" /></p>
          <p>ชื่อรายวิชาภาษาไทย: <input type="text" v-model="subject.subjectThaiName" /></p>
          <p>สังกัด: <input type="text" v-model="subject.affiliation" /></p>
          <p>หน่วยกิต: <input type="text" v-model="subject.credit" /></p>
          <p>ประเภทของรายวิชา: <input type="text" v-model="subject.subjectType" /></p>
          <p>จำนวนคนที่รับ: <input type="text" v-model="subject.numberOfpeople" /></p>
          <p>ปีการศึกษา: <input type="text" v-model="subject.yearOpen" /></p>
          <p>อาจารย์ผู้สอน: <input type="text" v-model="subject.professor" /></p>
          <p><button class="button" type="submit">edit subject</button></p>
        </form>
      </div>
      <hr />
      <div>
        <p>รหัสวิชา: {{ subject.subjectId }}</p>
        <p>ชื่อรายวิชาภาษาอังกฤษ: {{ subject.subjectEngName }}</p>
        <p>ชื่อรายวิชาภาษาไทย: {{ subject.subjectThaiName }}</p>
        <p>สังกัด: {{ subject.affiliation }}</p>
        <p>หน่วยกิต: {{ subject.credit }}</p>
        <p>ประเภทของรายวิชา: {{ subject.subjectType }}</p>
        <p>จำนวนคนที่รับ: {{ subject.numberOfpeople }}</p>
        <p>ปีการศึกษา: {{ subject.yearOpen }}</p>
        <p>อาจารย์ผู้สอน: {{ subject.professor }}</p>
      </div>
    </div>
  </center>
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
    async editSubject() {
      try {
        await SubjectsService.put(this.subject)
        this.$router.push("/subjects");
      } catch (err) {
        console.log(err)
      }
    },
  },
  async created() {
    try {
      let subjectId = this.$route.params.subjectId;
      this.subject = (await SubjectsService.show(subjectId)).data;
    } catch (err) {
      console.log(err)
    }
  }
};
</script>

<style>
.button {
  background-color: rgb(65, 63, 63);
  color: #ffffff;
  border: 2px solid rgb(65, 63, 63);
  padding: 8px 13px;
  border-radius: 40px;
}

.button:hover {
  background-color: #ffffff;
  color: rgb(65, 63, 63);
}
</style>