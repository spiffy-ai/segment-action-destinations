// Generated file. DO NOT MODIFY IT BY HAND.

export interface Payload {
  /**
   * The name of the event.
   */
  event: string
  /**
   * A JSON object containing the properties of the event.
   */
  properties?: {
    [k: string]: unknown
  }
  /**
   * Sends events in bulk to Canvas. Highly recommended.
   */
  enable_batching: boolean
  /**
   * Event context as it appears in Segment
   */
  context?: {
    [k: string]: unknown
  }
  /**
   * The anonymous ID associated with the user
   */
  anonymous_id?: string
  /**
   * The Segment messageId
   */
  message_id?: string
  /**
   * A timestamp of when the event took place. Default is current date and time.
   */
  timestamp?: string
  /**
   * When the event was received.
   */
  received_at: string | number
  /**
   * When the event was sent.
   */
  sent_at: string | number
  /**
   * The user's id
   */
  user_id?: string
}
