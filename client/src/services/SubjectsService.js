import Api from '@/services/Api';

export default {
    index (search){
        return Api().get("subjects");
    },
    show (subjectId){
        return Api().get("subject/"+subjectId);
    },
    post (subject){
        return Api().post("subject",subject);
    },
    put (subject){
        return Api().put("subject/"+subject.id, subject);
    },
    delete (subject){
        return Api().delete("subject/"+subject.id, subject);
    }
}