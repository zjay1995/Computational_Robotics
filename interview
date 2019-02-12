class Solution(object):
    def canJump(self, nums):
        stepsleft = nums[0]
        for num in nums[0:-1]:
            stepsleft = max(stepsleft - 1, num)
            if not stepsleft:
                return False
        return True

    def filter_zero(self, nums):
        x = list(filter(lambda x: x > 0, nums))
        return(x)

    def singleNonDuplicate(self, nums):
        for i in range(len(nums)):
            if nums.count(nums[i])<2:
                return nums[i]

            
    def merge(self, nums1, m, nums2, n):
            while m > 0 and n > 0:
                if nums1[m-1] >= nums2[n-1]:
                    nums1[m+n-1] = nums1[m-1]
                    m -= 1
                else:
                    nums1[m+n-1] = nums2[n-1]
                    n -= 1
            if n > 0:
                nums1[:n] = nums2[:n]

input = [2,0,1,1,2,0,1,0,1]
x = range(-5,5)
y = Solution()
print(y.canJump(input))
print(y.filter_zero(x))
