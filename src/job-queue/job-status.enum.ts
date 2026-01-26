export enum JobStatus {
  PENDING_PROMPT = 'pending_prompt', // Default
  PROMPT_READY = 'prompt_ready',
  IMGS_GEN_SENT = 'imgs_gen_sent',
  IMGS_GEN_WIP = 'imgs_gen_wip',
  IMGS_GEN_DONE = 'imgs_gen_done',
  IMGS_UP_WIP = 'imgs_up_wip',
  IMGS_UP_DONE = 'imgs_up_done',
  PUBLISHED = 'published',
  FAILED = 'failed',
}
