# frozen_string_literal: true

module UserDecorator
    def display_name
    #ボッチ演算子
        profile&.nickname || self.email.split('@').first
    end
end
