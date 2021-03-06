#!/usr/bin/env ruby

module Recipe

    require './cookbook/util/logging'

    class << self

        @@logger = LoggerFactory.getLogger File.basename __FILE__

        def title

            @@logger.debug '# Loop'

        end

        def cook

            nums = (0...5).to_a
            def pow x
                return x**2
            end

            ## for文

            results = Array.new
            for num in nums do
                results << pow(num)
            end
            @@logger.debug results.to_s

            ## each文

            results = Array.new
            nums.each do |num|
                results << pow(num)
            end
            @@logger.debug results.to_s

            ## map関数

            results = nums.map{ |num| pow num }
            @@logger.debug results.to_s

        end

    end

end

if __FILE__ == $0

    Recipe.title
    Recipe.cook

end
