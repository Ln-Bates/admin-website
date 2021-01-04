<template>
	<div class="detail-container">
		<el-form>
			<template v-for="(item, index) in detailModel">
				<div
					v-if="item.hide !== true"
					:key="index"
					class="group"
				>
					<div class="title-wrapper">
						<span class="title">{{item.title}}</span>
					</div>
					<div class="info-list">
						<el-row>
							<el-col
								v-for="(info, subIndex) in item.list"
								:key="subIndex"
								:span="info.span || item.span || 24"
							>
								<el-form-item
									:label="info.label"
									:label-width="item.labelWidth || '100px'"
								>
									<template v-if="!info.type || info.type === 'default'">
										{{data[info.prop]}}
									</template>
									<template v-else-if="info.type === 'image'">
										<div class="pic-list">
											<div
												v-for="(pic, picIndex) in pics(info)"
												:key="picIndex"
												class="pic-item"
											>
												<el-image
													:src="pic"
													class="pic"
													fit="cover"
												/>
											</div>
										</div>
									</template>
									<template v-else-if="info.type === 'slot'">
										<slot :name="info.prop" />
									</template>
								</el-form-item>
							</el-col>
						</el-row>
					</div>
				</div>
			</template>
		</el-form>
	</div>
</template>

<script>
	export default {
		props: {
			data: {
				type: Object,
				default() {
					return {};
				}
			},
			detailModel: {
				type: Array,
				default() {
					return [];
				}
			}
		},
		methods: {
			pics(info) {
				const picsStr = this.data[info.prop];
				if (picsStr && typeof picsStr === 'string') {
					return picsStr.split(',');
				}
				return [];
			}
		}
	};
</script>

<style lang="scss" scoped>
	.title-wrapper {
		position: relative;

		.title {
			position: relative;
			padding: 0 15px;
			font-size: 16px;
			background: #e9eef3;
			z-index: 2;
		}

		&:after {
			content: '';
			display: block;
			position: absolute;
			left: 0;
			top: 50%;
			transform: translateY(-50%) scaleY();
			width: 100%;
			height: 0;
			border-top: 1px solid rgba(0, 0, 0, 0.12);
		}
	}

	.info-list {
		padding-top: 20px;
	}

	.pic {
		width: 80px;
		height: 80px;
	}
</style>
