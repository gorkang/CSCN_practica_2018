class BasicConfig(object):
	"""docstring for BasicConfig"""
	def __init__(self):
		super(BasicConfig, self).__init__()
		self.basic_config = self.Configuration()
		
	def Configuration(self):
		# Select your GIT PATH
		numeric_cont = 0
		randomization = False
		multichoice_init = 0
		words_cont = 0

		config_dict = {'cont': numeric_cont, 'random': randomization, 'multi': multichoice_init, 'word': words_cont}

		return config_dict