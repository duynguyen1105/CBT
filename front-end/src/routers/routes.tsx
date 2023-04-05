interface Routes {
  default: string
  workspace: string
  user: {
    default: string
    create: string
    edit: string
  }
  question: {
    default: string
    create: string
    edit: string
  }
  test: {
    default: string
    create: string
    edit: string
  }
  class: {
    default: string
    create: string
    edit: string
    makeTest: string
    startTest: string
    testReading: string
    testWriting: string
    testSpeaking: string
  }
  login: string
}

export const routes: Routes = {
  default: '/',
  workspace: 'workspace',
  user: {
    default: '/user',
    create: '/user/create',
    edit: '/user/edit/:userId',
  },
  question: {
    default: '/question',
    create: '/question/create',
    edit: '/question/edit/:questionId',
  },
  test: {
    default: '/test',
    create: '/test/create',
    edit: '/test/:testId',
  },
  class: {
    default: '/class',
    create: '/class/create',
    edit: '/class/:classId',
    makeTest: '/class/:classId/:titleTest',
    startTest: '/class/:classId/:titleTest/listening-test',
    testReading: '/class/:classId/:titleTest/reading-test',
    testWriting: '/class/:classId/:titleTest/writing-test',
    testSpeaking: '/class/:classId/:titleTest/speaking-test',
  },
  login: '/login',
}
