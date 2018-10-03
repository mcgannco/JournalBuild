# == Schema Information
#
# Table name: entries
#
#  id         :bigint(8)        not null, primary key
#  title      :string           not null
#  body       :text             not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Entry < ApplicationRecord
  validates :title, :body, :user_id, presence: true
  validates :user_id, uniqueness: { scope: :title, message: "Journal titles must be unique"}

  belongs_to :user,
      class_name: :User,
      foreign_key: :user_id,
      primary_key: :id
end
