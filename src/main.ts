import * as core from '@actions/core'
import * as github from '@actions/github'
import * as Webhooks from '@octokit/webhooks'

async function run(): Promise<void> {
  try {
    const addLabels: string = core.getInput('addlabels')
    const removeLabels: string = core.getInput('removeLabels')

    // eslint-disable-next-line no-console
    console.log(addLabels)

    // eslint-disable-next-line no-console
    console.log(removeLabels)

    // eslint-disable-next-line no-console
    console.log(github.context.eventName)

    // eslint-disable-next-line no-console
    console.log(github.context.payload)

    if (github.context.eventName === 'pull_request') {
      const pushPayload = github.context
        .payload as Webhooks.WebhookPayloadPullRequestPullRequest
      // eslint-disable-next-line no-console
      console.log(pushPayload.title)
      // eslint-disable-next-line no-console
      console.log(pushPayload._links)
    }
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
