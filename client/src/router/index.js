import Vue from 'vue'
import Router from 'vue-router'

// Subjects
import SubjectIndex from '@/components/Subjects/Index'
import SubjectCreate from '@/components/Subjects/CreateSubject'
import SubjectEdit from '@/components/Subjects/EditSubject'
import SubjectShow from '@/components/Subjects/ShowSubject'


Vue.use(Router)
export default new Router({
    routes: [
        {
            path: '/subjects',
            name: 'subjects',
            component: SubjectIndex
        },
        {
            path: '/subject/create',
            name: 'subjects-create',
            component: SubjectCreate
        },
        {
            path: '/subject/edit/:subjectId',
            name: 'subject-edit',
            component: SubjectEdit
        },
        {
            path: '/subject/:subjectId',
            name: 'subject',
            component: SubjectShow
        },
    
    ]
})