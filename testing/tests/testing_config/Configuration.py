class BasicConfig(object):
	"""docstring for BasicConfig"""
	def __init__(self):
		super(BasicConfig, self).__init__()
		self.basic_config = self.Configuration()
		
	def Configuration(self):
		# Select your GIT PATH
		PATH = 'home/herm4nv/Documents/CSCN'

		config_dict = {"PATH": PATH}

		return config_dict