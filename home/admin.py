# from django.contrib import admin

# from .models import Voters, Vote, Block, VoteBackup, PoliticalParty, MiningInfo
# admin.site.site_header = 'Electraballot Admin Panel'
# admin.site.site_title = 'Electraballot Admin Panel'
# admin.site.index_title = 'Dashboard'
# # Register your models here.
# admin.site.register(Voters)
# admin.site.register(Vote)
# admin.site.register(Block)
# admin.site.register(VoteBackup)
# admin.site.register(PoliticalParty)
# admin.site.register(MiningInfo)

from django.contrib import admin
from .models import Voters, Vote, Block, VoteBackup, PoliticalParty, MiningInfo

admin.site.site_header = 'Electraballot Admin Panel'
admin.site.site_title = 'Electraballot Admin Panel'
admin.site.index_title = 'Dashboard'

# Register your models here.
admin.site.register(Voters)
admin.site.register(Vote)
admin.site.register(Block)
admin.site.register(VoteBackup)
admin.site.register(PoliticalParty)
admin.site.register(MiningInfo)