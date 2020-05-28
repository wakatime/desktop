import PyCharm from '../../src/editors/pycharm';

const sinon = require('sinon');

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

const { expect } = chai;
chai.use(chaiAsPromised);

describe('PyCharm', () => {
  let pyCharm: PyCharm;
  let isDirectorySyncStub: any;
  let isFileSyncStub: any;

  beforeEach(() => {
    pyCharm = new PyCharm();
    isDirectorySyncStub = sinon.stub(pyCharm, 'isDirectorySync');
    isFileSyncStub = sinon.stub(pyCharm, 'isFileSync');
  });
  afterEach(() => {
    isDirectorySyncStub.restore();
    isFileSyncStub.restore();
  });
  it('should return the correct key name', () => {
    const result = pyCharm.key;
    expect(result).to.equal('pycharm');
  });
  it('should return the correct editor name', () => {
    const result = pyCharm.name;
    expect(result).to.equal('PyCharm');
  });
  it('should return TRUE if editor is installed', async () => {
    isDirectorySyncStub.resolves(true);
    const result = await pyCharm.isEditorInstalled();
    expect(result).to.be.true;
  });
  it('should return TRUE if editor is installed', async () => {
    isDirectorySyncStub.returns(true);
    const result = await pyCharm.isEditorInstalled();
    expect(result).to.be.true;
  });
  it('should return FALSE if editor is not installed', async () => {
    isDirectorySyncStub.returns(false);
    const result = await pyCharm.isEditorInstalled();
    expect(result).to.be.false;
  });
  it('should return TRUE if plugin is installed', async () => {
    isFileSyncStub.returns(true);
    const result = await pyCharm.isPluginInstalled();
    expect(result).to.be.true;
  });
  it('should return FALSE if plugin is not installed', async () => {
    isFileSyncStub.returns(false);
    const result = await pyCharm.isPluginInstalled();
    expect(result).to.be.false;
  });
});
